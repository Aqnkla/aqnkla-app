using Aqnkla.Authentication.JwtBearer.Entity;
using Aqnkla.Authentication.JwtBearer.Model;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Services.Authentication
{
    public interface IAuthenticationService<TKey>
    {
        Task<AuthenticateResponse<TKey>> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<JwtUserEntity<TKey>> GetByIdAsync(TKey id);
        Task<AuthenticateResponse<TKey>> RefreshTokenAsync(string token, string ipAddress);
        Task<bool> RevokeTokenAsync(string token, string ipAddress);
    }
}