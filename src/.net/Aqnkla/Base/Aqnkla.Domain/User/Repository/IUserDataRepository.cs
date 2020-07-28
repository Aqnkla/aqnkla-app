using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.User.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Domain.User.Repository
{
    public interface IUserDataRepository<T, TKey> : IRepository<T, TKey> where T : UserDataEntity<TKey>
    {
        Task<IList<T>> GetUserData(TKey userId);
    }
}
