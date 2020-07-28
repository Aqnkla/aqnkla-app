using Sorgo.Domain.Base.Repository;
using Sorgo.Domain.User.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sorgo.Domain.User.Repository
{
    public interface IUserDataRepository<T, TKey> : IRepository<T, TKey> where T : UserDataEntity<TKey>
    {
        Task<IList<T>> GetUserData(TKey userId);
    }
}
