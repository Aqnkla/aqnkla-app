using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Model.Authentication;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication
{
    public interface IAuthenticationService<TKey>
    {
        Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress);
        Task ValidateResetTokenAsync(ValidateResetTokenRequest model);
        Task RevokeTokenAsync(string token, string ipAddress);
    }
}
