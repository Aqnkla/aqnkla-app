using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.User.Extension;
using System;

namespace Aqnkla.Domain.User.Entity
{
    public abstract class UserDataEntity<TKey> : BaseEntity<TKey>
    {
        public TKey AqnklaUserId { get; set; }

        public string EmailAddress { get; set; }

        public Sex UserSex { get; set; }

        public DateTime BirthDate { get; set; }
    }
}
