using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Domain.Base.Service;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Core.Services
{
    public interface IJwtUserService<TKey> : IService<JwtUserEntity<TKey>, TKey>
    {
        Task<JwtUserEntity<TKey>> GetByHashAsync(string username, string hash);
        Task<JwtUserEntity<TKey>> GetByTokenAsync(string token);
    }
}
