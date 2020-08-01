using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Repository
{
    public interface IAqnklaUserRepository<TKey> : IRepository<AqnklaUserEntity<TKey>, TKey>
    {
        Task<bool> UserExistsAsync(string uniqueName);
        Task<AqnklaUserEntity<TKey>> GetUserAsync(string uniqueName);
    }
}
