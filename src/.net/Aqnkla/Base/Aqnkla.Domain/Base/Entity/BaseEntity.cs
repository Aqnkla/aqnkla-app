// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019

namespace Sorgo.Domain.Base.Entity
{
    public abstract class BaseEntity<TKey>
    {
        public TKey Id { get; set; }
    }
}
