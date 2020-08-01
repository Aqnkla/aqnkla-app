using Aqnkla.Domain.Base.Entity;

namespace Aqnkla.Domain.User.Entity
{
    public class AqnklaUserEntity<TKey> : BaseEntity<TKey>
    {
        public string UserUniqueName { get; set; }
    }
}
