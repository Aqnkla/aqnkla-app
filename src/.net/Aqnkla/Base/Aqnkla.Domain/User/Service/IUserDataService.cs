using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Service
{
    public interface IUserDataService<TKey> : IService<UserDataEntity<TKey>, TKey>
    {
        Task<bool> UserEmailExistsAsync(string emailAddress);
        Task<UserDataEntity<TKey>> GetUserByEmailAsync(string emailAddress);
    }
}
