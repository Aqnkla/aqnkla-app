using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Service
{
    public interface IUserService<TKey> : IService<UserEntity<TKey>, TKey>
    {
        Task<bool> UserExistsAsync(string userId);
        Task<bool> UserEmailExistsAsync(string emailAddress);
        Task<UserEntity<TKey>> GetUserAsync(string userId);
    }
}
