
using Sorgo.Domain.User.Entity;
using Sorgo.Domain.User.Repository;
using Sorgo.Domain.User.Service;
using Sorgo.Service.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sorgo.Service.User
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
