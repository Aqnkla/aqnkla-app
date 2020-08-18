using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helper;
using Aqnkla.Authentication.JwtBearer.Provider.Helper.AuthenticationSettings;
using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Service;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication
{
    public class AuthenticationService<TKey> : IAuthenticationService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly IAqnklaUserService<TKey> aqnklaUserService;
        private readonly IAuthenticationSettingsProvider authenticationSettingsProvider;

        public AuthenticationService(
            IJwtUserService<TKey> jwtUserService,
            IAqnklaUserService<TKey> aqnklaUserService,
            IAuthenticationSettingsProvider authenticationSettingsProvider
            )
        {
            this.jwtUserService = jwtUserService;
            this.aqnklaUserService = aqnklaUserService;
            this.authenticationSettingsProvider = authenticationSettingsProvider;
        }

        public async Task<AuthenticateResponse<TKey>> AuthenticateAsync(AuthenticateRequest model, string ipAddress)
        {
            var hash = AuthenticationHelper.GenaretePasswordHash(model.Password);
            var user = await jwtUserService.GetByHashAsync(model.Username, hash).ConfigureAwait(false);

            // return null if user not found
            if (user == null)
            {
                var userDomain = await GetDomaninUserAsync(model);
                await jwtUserService.AddAsync(new JwtUserEntity<TKey>
                {
                    AqnklaUserId = userDomain.Id,
                    PasswordHash = hash
                }).ConfigureAwait(false);

                user = await jwtUserService.GetByHashAsync(model.Username, hash).ConfigureAwait(false);
            }


            var aqnklaUser = await aqnklaUserService.GetAsync(user.AqnklaUserId);
            // authentication successful so generate jwt and refresh tokens
            var jwtToken = GenerateJwtToken(user);
            var refreshToken = GenerateRefreshToken(ipAddress);

            // save refresh token
            if(user.RefreshTokens==null)
            {
                user.RefreshTokens = new List<RefreshToken>();
            }


            user.RefreshTokens.Add(refreshToken);
            await jwtUserService.UpdateAsync(user.Id, user);

            return new AuthenticateResponse<TKey>(user, aqnklaUser, jwtToken, refreshToken.Token);
        }

        private async Task<AqnklaUserEntity<TKey>> GetDomaninUserAsync(AuthenticateRequest model)
        {
            var user = await aqnklaUserService.GetUserAsync(model.Username);
            if (user != null)
            {
                return user;
            }
            var newUser = new AqnklaUserEntity<TKey>
            {
                UserUniqueName = model.Username
            };
            await aqnklaUserService.AddAsync(newUser);
            return await aqnklaUserService.GetUserAsync(model.Username);
        }

        public async Task<AuthenticateResponse<TKey>> RefreshTokenAsync(string token, string ipAddress)
        {
            var user = await jwtUserService.GetByTokenAsync(token);

            // return null if no user found with token
            if (user == null) return null;

            var refreshToken = user.RefreshTokens.Single(x => x.Token == token);

            // return null if token is no longer active
            if (!refreshToken.IsActive) return null;

            // replace old refresh token with a new one and save
            var newRefreshToken = GenerateRefreshToken(ipAddress);
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            user.RefreshTokens.Add(newRefreshToken);
            var aqnklaUser = await aqnklaUserService.GetAsync(user.AqnklaUserId);
            await jwtUserService.UpdateAsync(user.Id, user);

            // generate new jwt
            var jwtToken = GenerateJwtToken(user);

            return new AuthenticateResponse<TKey>(user, aqnklaUser, jwtToken, newRefreshToken.Token);
        }

        public async Task<bool> RevokeTokenAsync(string token, string ipAddress)
        {
            var user = await jwtUserService.GetByTokenAsync(token);

            // return false if no user found with token
            if (user == null) return false;

            var refreshToken = user.RefreshTokens.Single(x => x.Token == token);

            // return false if token is not active
            if (!refreshToken.IsActive) return false;

            // revoke token and save
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            await jwtUserService.UpdateAsync(user.Id, user);

            return true;
        }

        public async Task<JwtUserEntity<TKey>> GetByIdAsync(TKey id)
        {
            return await jwtUserService.GetAsync(id);
        }

        // helper methods

        private string GenerateJwtToken(JwtUserEntity<TKey> user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(authenticationSettingsProvider.GetSecret());
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private static RefreshToken GenerateRefreshToken(string ipAddress)
        {
            using var rngCryptoServiceProvider = new RNGCryptoServiceProvider();
            var randomBytes = new byte[64];
            rngCryptoServiceProvider.GetBytes(randomBytes);
            return new RefreshToken
            {
                Token = Convert.ToBase64String(randomBytes),
                Expires = DateTime.UtcNow.AddDays(7),
                Created = DateTime.UtcNow,
                CreatedByIp = ipAddress
            };
        }
    }
}