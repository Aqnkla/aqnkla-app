using Aqnkla.Domain.Base.Entity;

namespace Aqnkla.Domain.Base.Service
{
    public interface IViewService<T, TVievModel, TKey> : IService<T, TKey>
        where T : BaseEntity<TKey>
        where TVievModel : BaseViewModel
    {
        T MapToEntity(TVievModel vievModel);
        TVievModel MapToViewModel(T entity);
    }
}
