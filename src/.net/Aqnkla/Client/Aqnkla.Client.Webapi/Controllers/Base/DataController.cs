using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.Key.Service;
using Microsoft.AspNetCore.Mvc;

namespace Aqnkla.Client.Webapi.Controllers.Base
{
    [Controller]
    public abstract class DataController<T, TKey> : BaseController where T : BaseEntity<TKey>
    {
        private readonly IService<T, TKey> service;
        private readonly IKeyService<TKey> keyService;

        protected DataController(
            IService<T, TKey> service,
             IKeyService<TKey> keyService)
        {
            this.service = service;
            this.keyService = keyService;
        }

        // GET all
        [HttpGet]
        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await service.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<T> GetAsync(string id)
        {
            return await service.GetAsync(keyService.ParseKey(id));
        }

        // add
        [HttpPost]
        public async Task PostAsync([FromBody] T value)
        {
            await service.AddAsync(value);
        }

        // update
        [HttpPut("{id}")]
        public async Task PutAsync(string id, [FromBody] T value)
        {
            await service.UpdateAsync(keyService.ParseKey(id), value);
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task DeleteAsync(string id)
        {
            await service.DelateAsync(keyService.ParseKey(id));
        }
    }
}
