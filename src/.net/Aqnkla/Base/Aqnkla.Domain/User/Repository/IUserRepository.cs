using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Repository
{
    public interface IUserRepository<TKey> : IRepository<UserEntity<TKey>, TKey>
    {
        Task<bool> UserEmailExistsAsync(string emailAddress);
        Task<bool> UserExistsAsync(string userId);
        Task<UserEntity<TKey>> GetUserAsync(string userId);
    }
}
