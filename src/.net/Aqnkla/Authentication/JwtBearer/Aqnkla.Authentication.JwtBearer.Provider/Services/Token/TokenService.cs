using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Token
{
    public class TokenService<TKey> : ITokenService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly JwtSettings appSettings;

        public TokenService(
            IJwtUserService<TKey> jwtUserService,
            IOptions<JwtSettings> appSettings)
        {
            this.jwtUserService = jwtUserService;
            this.appSettings = appSettings.Value;
        }

        public RefreshToken GenerateRefreshToken(string ipAddress)
        {
            return new RefreshToken
            {
                Token = RandomTokenString(),
                Expires = DateTime.UtcNow.AddDays(7),
                Created = DateTime.UtcNow,
                CreatedByIp = ipAddress
            };
        }

        public string RandomTokenString()
        {
            using var rngCryptoServiceProvider = new RNGCryptoServiceProvider();
            var randomBytes = new byte[40];
            rngCryptoServiceProvider.GetBytes(randomBytes);
            // convert random bytes to hex string
            return BitConverter.ToString(randomBytes).Replace("-", "");
        }
        public async Task<(RefreshToken, JwtUserEntity<TKey>)> GetRefreshTokenAsync(string token)
        {
            var account = await jwtUserService.GetByTokenAsync(token);
            if (account == null) throw new JwtAppException("Invalid token");
            var refreshToken = account.RefreshTokens.Single(x => x.Token == token);
            if (!refreshToken.IsActive) throw new JwtAppException("Invalid token");
            return (refreshToken, account);
        }

        public string GenerateJwtToken(JwtUserEntity<TKey> account)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", account.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
