using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.Base;
using System.Threading.Tasks;

namespace Aqnkla.Service.User
{
    public class AqnklaUserService<TKey> : BaseService<AqnklaUserEntity<TKey>, TKey>, IAqnklaUserService<TKey>
    {
        private readonly IAqnklaUserRepository<TKey> repository;

        public AqnklaUserService(IAqnklaUserRepository<TKey> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<AqnklaUserEntity<TKey>> GetUserAsync(string uniqueName)
        {
            return await repository.GetUserAsync(uniqueName).ConfigureAwait(false);
        }

        public async Task<bool> UserExistsAsync(string uniqueName)
        {
            return await repository.UserExistsAsync(uniqueName).ConfigureAwait(false);
        }
    }
}
