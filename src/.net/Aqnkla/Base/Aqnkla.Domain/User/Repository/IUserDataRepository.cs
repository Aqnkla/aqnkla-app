using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.User.Entity;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Repository
{
    public interface IUserDataRepository<TKey> : IRepository<UserDataEntity<TKey>, TKey>
    {
        Task<bool> UserEmailExistsAsync(string emailAddress);
        Task<UserDataEntity<TKey>> GetUserByEmailAsync(string emailAddress);
    }
}
