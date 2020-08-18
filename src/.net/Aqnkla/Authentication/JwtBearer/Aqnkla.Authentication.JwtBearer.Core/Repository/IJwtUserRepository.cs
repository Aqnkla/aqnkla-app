using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Domain.Base.Repository;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Core.Repository
{
    public interface IJwtUserRepository<TKey> : IRepository<JwtUserEntity<TKey>, TKey>
    {
        Task<JwtUserEntity<TKey>> GetByTokenAsync(string token);
        Task<JwtUserEntity<TKey>> GetByHashAsync(TKey userId, string hash);
        Task<JwtUserEntity<TKey>> GetByValidTokenAsync(string token);
    }
}
