using Sorgo.Domain.Base.Service;
using Sorgo.Domain.User.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sorgo.Domain.User.Service
{
    public interface IUserDataService<T, TKey> : IService<T, TKey> where T : UserDataEntity<TKey>
    {
        Task<IList<T>> GetUserDataAsync(TKey userId);
    }
}
