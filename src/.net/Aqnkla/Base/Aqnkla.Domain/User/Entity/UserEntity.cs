﻿using Aqnkla.Domain.Base.Entity;
using System;

namespace Aqnkla.Domain.User.Entity
{
    public class UserEntity<TKey> : BaseEntity<TKey>
    {
        public string UserUniqueName { get; set; }

        public string EmailAddress { get; set; }

        public Sex UserSex { get; set; }

        public DateTime BirthDate { get; set; }
    }
}
