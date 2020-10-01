using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.Language.Model;

namespace Aqnkla.Service.Base
{
    public abstract class BaseViewService<T, TVievModel, TKey> : BaseService<T, TKey>, IViewService<T, TVievModel, TKey>
           where T : BaseEntity<TKey>
    {
        public BaseViewService(IRepository<T, TKey> repository) : base(repository)
        {
        }

        public abstract T MapToEntity(TVievModel vievModel);

        public abstract TVievModel MapToViewModel(T entity, LanguageValue language);
    }
}
