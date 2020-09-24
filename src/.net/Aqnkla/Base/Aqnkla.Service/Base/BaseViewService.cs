using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.Base.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Service.Base
{
    public abstract class BaseViewService<T, TVievModel, TKey> : BaseService<T, TKey>, IViewService<T, TVievModel, TKey>
           where T : BaseEntity<TKey>
           where TVievModel : BaseViewModel
    {
        public BaseViewService(IRepository<T, TKey> repository) : base(repository)
        {
        }

        public abstract T MapToEntity(TVievModel vievModel);

        public abstract TVievModel MapToViewModel(T entity);
    }
}
