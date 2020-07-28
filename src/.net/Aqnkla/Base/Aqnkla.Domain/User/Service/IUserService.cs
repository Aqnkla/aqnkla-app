using Sorgo.Domain.Base.Service;
using Sorgo.Domain.User.Entity;
using System.Threading.Tasks;

namespace Sorgo.Domain.User.Service
{
    public interface IUserService<TKey> : IService<UserEntity<TKey>, TKey>
    {
        Task<bool> UserExistsAsync(string userId);
        Task<bool> UserEmailExistsAsync(string emailAddress);
        Task<UserEntity<TKey>> GetUserAsync(string userId);
    }
}
