
using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Service.User
{
    public class UserDataService<T, TKey> : BaseService<T, TKey>, IUserDataService<T, TKey> where T : UserDataEntity<TKey>
    {
        private readonly IUserDataRepository<T, TKey> repository;

        public UserDataService(IUserDataRepository<T, TKey> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<IList<T>> GetUserDataAsync(TKey userId)
        {
            return await repository.GetUserData(userId).ConfigureAwait(false);
        }
    }
}
