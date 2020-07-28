// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sorgo.Service.Base
{
    public class BaseService<T, TKey> : IService<T, TKey> where T : BaseEntity<TKey>
    {
        private readonly IRepository<T, TKey> repository;

        public BaseService(IRepository<T, TKey> repository)
        {
            this.repository = repository;
        }

        public virtual async Task AddAsync(T value)
        {
            await repository.AddAsync(value).ConfigureAwait(false);
        }

        public virtual async Task DelateAsync(TKey id)
        {
            await repository.DelateAsync(id).ConfigureAwait(false);
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await repository.GetAllAsync().ConfigureAwait(false);
        }

        public virtual async Task<T> GetAsync(TKey id)
        {
            return await repository.GetAsync(id).ConfigureAwait(false);
        }

        public virtual async Task<T> UpdateAsync(TKey id, T value)
        {
            return await repository.UpdateAsync(id, value).ConfigureAwait(false);
        }
    }
}
