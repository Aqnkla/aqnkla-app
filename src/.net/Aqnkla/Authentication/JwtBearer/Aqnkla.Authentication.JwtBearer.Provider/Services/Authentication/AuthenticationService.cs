using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Model.Authentication;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Convert;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Token;
using Aqnkla.Domain.Password.Service;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication
{
    public class AuthenticationService<TKey>: IAuthenticationService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly IConvertService<TKey> convertService;
        private readonly ITokenService<TKey> tokenService;
        private readonly IPasswordService passwordService;

        public AuthenticationService(
            IJwtUserService<TKey> jwtUserService,
            IConvertService<TKey> convertService,
            ITokenService<TKey> tokenService,
            IPasswordService passwordService)
        {
            this.jwtUserService = jwtUserService;
            this.convertService = convertService;
            this.tokenService = tokenService;
            this.passwordService = passwordService;
        }
        public async Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model, string ipAddress)
        {
            var account = await jwtUserService.GetByEmailAsync(model.Email);

            if (account == null || !account.IsVerified || !passwordService.Verify(model.Password, account.PasswordHash))
                throw new JwtAppException("Email or password is incorrect");

            // authentication successful so generate JWT and refresh tokens
            var jwtToken = tokenService.GenerateJwtToken(account);
            var refreshToken = tokenService.GenerateRefreshToken(ipAddress);


            if (account.RefreshTokens == null)
            {
                account.RefreshTokens = new List<RefreshToken>();
            }

            // save refresh token
            account.RefreshTokens.Add(refreshToken);
            await jwtUserService.UpdateAsync(account.Id, account);

            AuthenticateResponse response = convertService.UserToAuthenticateResponse(account);
            response.JwtToken = jwtToken;
            response.RefreshToken = refreshToken.Token;
            return response;
        }

        public async Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress)
        {
            var (refreshToken, account) = await tokenService.GetRefreshTokenAsync(token);

            // replace old refresh token with a new one and save
            var newRefreshToken = tokenService.GenerateRefreshToken(ipAddress);
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            account.RefreshTokens.Add(newRefreshToken);
            await jwtUserService.UpdateAsync(account.Id, account);

            // generate new JWT
            var jwtToken = tokenService.GenerateJwtToken(account);

            AuthenticateResponse response = convertService.UserToAuthenticateResponse(account);
            response.JwtToken = jwtToken;
            response.RefreshToken = newRefreshToken.Token;
            return response;
        }

        public async Task RevokeTokenAsync(string token, string ipAddress)
        {
            var (refreshToken, account) = await tokenService.GetRefreshTokenAsync(token);

            // revoke token and save
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            await jwtUserService.UpdateAsync(account.Id, account);
        }
        public async Task ValidateResetTokenAsync(ValidateResetTokenRequest model)
        {
            var account = await jwtUserService.GetByVakidTokenAsync(model.Token);

            if (account == null)
                throw new JwtAppException("Invalid token");
        }
    }
}
