using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.Key.Service;
using Aqnkla.Domain.Language.Model;
using Microsoft.AspNetCore.Mvc;

namespace Aqnkla.Client.Webapi.Controllers.Base
{
    [Controller]
    public abstract class DataController<T, TVievModel, TKey> : BaseController
        where T : BaseEntity<TKey>
    {
        private readonly IViewService<T, TVievModel, TKey> service;
        private readonly IKeyService<TKey> keyService;

        protected DataController(
            IViewService<T, TVievModel, TKey> service,
             IKeyService<TKey> keyService)
        {
            this.service = service;
            this.keyService = keyService;
        }

        // GET all
        [HttpGet]
        public async Task<IEnumerable<TVievModel>> GetAllAsync()
        {
            return (await service.GetAllAsync()).Select(b => service.MapToViewModel(b, LanguageValue.English));
        }

        [HttpGet("{id}")]
        public async Task<TVievModel> GetAsync(string id)
        {
            var value = await service.GetAsync(keyService.ParseKey(id));
            return service.MapToViewModel(value, GetCurrentLanguage());
        }

        // add
        [HttpPost]
        public async Task PostAsync([FromBody] TVievModel vievModel)
        {
            var value = service.MapToEntity(vievModel);
            await service.AddAsync(value);
        }

        // update
        [HttpPut("{id}")]
        public async Task PutAsync(string id, [FromBody] TVievModel vievModel)
        {
            var value = service.MapToEntity(vievModel);
            await service.UpdateAsync(keyService.ParseKey(id), value);
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task DeleteAsync(string id)
        {
            await service.DelateAsync(keyService.ParseKey(id));
        }


        protected LanguageValue GetCurrentLanguage()
        {
            return LanguageValue.English;
        }
    }
}
