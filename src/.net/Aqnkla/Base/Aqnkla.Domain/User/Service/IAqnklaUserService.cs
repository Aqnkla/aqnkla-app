using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Service
{
    public interface IAqnklaUserService<TKey> : IService<AqnklaUserEntity<TKey>, TKey>
    {
        Task<bool> UserExistsAsync(string uniqueName);
        Task<AqnklaUserEntity<TKey>> GetUserAsync(string uniqueName);
    }
}
