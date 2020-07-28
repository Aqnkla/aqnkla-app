using Sorgo.Domain.Base.Entity;

namespace Sorgo.Domain.User.Entity
{
    public abstract class UserDataEntity<TKey> : BaseEntity<TKey>
    {
        public UserEntity<TKey> User { get; set; }
    }
}
