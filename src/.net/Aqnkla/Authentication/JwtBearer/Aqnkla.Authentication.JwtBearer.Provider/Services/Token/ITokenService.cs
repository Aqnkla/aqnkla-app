using Aqnkla.Authentication.JwtBearer.Core.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Token
{
    public interface ITokenService<TKey>
    {
        string RandomTokenString();

        Task<(RefreshToken, JwtUserEntity<TKey>)> GetRefreshTokenAsync(string token);

        string GenerateJwtToken(JwtUserEntity<TKey> account);

        RefreshToken GenerateRefreshToken(string ipAddress);
    }
}
