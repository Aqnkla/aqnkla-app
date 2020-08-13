
using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.Base;
using System.Threading.Tasks;

namespace Aqnkla.Service.User
{
    public class UserDataService<TKey> : BaseService<UserDataEntity<TKey>, TKey>, IUserDataService<TKey>
    {
        private readonly IUserDataRepository<TKey> repository;

        public UserDataService(IUserDataRepository<TKey> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<UserDataEntity<TKey>> GetUserByEmailAsync(string emailAddress)
        {
            return await repository.GetUserByEmailAsync(emailAddress).ConfigureAwait(false);
        }

        public async Task<bool> UserEmailExistsAsync(string emailAddress)
        {
            return await repository.UserEmailExistsAsync(emailAddress).ConfigureAwait(false);
        }
    }
}
