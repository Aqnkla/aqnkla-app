// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using Aqnkla.Domain.Base.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Domain.Base.Repository
{
    public interface IRepository<T, TKey> where T : BaseEntity<TKey>
    {
        Task<T> GetAsync(TKey id);
        Task<IEnumerable<T>> GetAllAsync();
        Task AddAsync(T value);
        Task<T> UpdateAsync(TKey id, T value);
        Task DelateAsync(TKey id);
    }
}
