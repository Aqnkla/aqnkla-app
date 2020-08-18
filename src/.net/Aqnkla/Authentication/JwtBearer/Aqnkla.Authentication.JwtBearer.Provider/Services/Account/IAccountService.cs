using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Services
{
    public interface IAccountService<TKey>
    {
        Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress);
        Task RevokeTokenAsync(string token, string ipAddress);
        Task RegisterAsync(RegisterRequest model, string origin);
        Task VerifyEmailAsync(string token);
        Task ForgotPasswordAsync(ForgotPasswordRequest model, string origin);
        Task ValidateResetTokenAsync(ValidateResetTokenRequest model);
        Task ResetPasswordAsync(ResetPasswordRequest model);
        Task<IEnumerable<AccountResponse>> GetAllAsync();
        Task<AccountResponse> GetByIdAsync(TKey id);
        Task<AccountResponse> CreateAsync(CreateRequest model);
        Task<AccountResponse> UpdateAsync(TKey id, UpdateRequest model);
        Task DeleteAsync(TKey id);
    }
}
