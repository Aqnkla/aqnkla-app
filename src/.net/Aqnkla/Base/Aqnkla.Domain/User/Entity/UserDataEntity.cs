using Aqnkla.Domain.Base.Entity;

namespace Aqnkla.Domain.User.Entity
{
    public abstract class UserDataEntity<TKey> : BaseEntity<TKey>
    {
        public UserEntity<TKey> User { get; set; }
    }
}
