using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.Base;
using System.Threading.Tasks;

namespace Aqnkla.Service.User
{
    public class UserService<TKey> : BaseService<UserEntity<TKey>, TKey>, IUserService<TKey>
    {
        private readonly IUserRepository<TKey> repository;

        public UserService(IUserRepository<TKey> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<UserEntity<TKey>> GetUserAsync(string userId)
        {
            return await repository.GetUserAsync(userId).ConfigureAwait(false);
        }

        public async Task<bool> UserEmailExistsAsync(string emailAddress)
        {
            return await repository.UserEmailExistsAsync(emailAddress).ConfigureAwait(false);
        }

        public async Task<bool> UserExistsAsync(string userId)
        {
            return await repository.UserExistsAsync(userId).ConfigureAwait(false);
        }
    }
}
