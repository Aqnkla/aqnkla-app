using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication
{
    internal interface IAuthenticationService<TKey>
    {
        Task<AuthenticateResponse<TKey>> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<JwtUserEntity<TKey>> GetByIdAsync(TKey id);
        Task<AuthenticateResponse<TKey>> RefreshTokenAsync(string token, string ipAddress);
        Task<bool> RevokeTokenAsync(string token, string ipAddress);
    }
}