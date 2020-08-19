using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Account
{
    public interface IJwtAccountService<TKey>
    {
        Task RegisterAsync(RegisterRequest model, string origin);
        Task VerifyEmailAsync(string token);
        Task ForgotPasswordAsync(ForgotPasswordRequest model, string origin);
        Task ResetPasswordAsync(ResetPasswordRequest model);
        Task<AccountResponse> GetByIdAsync(TKey id);
        Task<AccountResponse> UpdateAsync(TKey id, UpdateRequest model);
        Task DeleteAsync(TKey id);
    }
}
