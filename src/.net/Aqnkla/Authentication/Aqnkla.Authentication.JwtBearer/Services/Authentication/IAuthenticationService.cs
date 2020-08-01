using Aqnkla.Authentication.JwtBearer.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Services.Authentication
{
    public interface IAuthenticationService<TKey>
    {
        AuthenticateResponse<TKey> Authenticate(AuthenticateRequest model, string ipAddress);
        Task<JwtUserEntity<TKey>> GetByIdAsync(TKey id);
        AuthenticateResponse<TKey> RefreshToken(string token, string ipAddress);
        bool RevokeToken(string token, string ipAddress);

    }
}