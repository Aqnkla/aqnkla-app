using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Administration
{
    public interface IAdministrationService<TKey>
    {
        Task<IEnumerable<AccountResponse>> GetAllAsync();
        Task<AccountResponse> CreateAsync(CreateRequest model);
    }
}
