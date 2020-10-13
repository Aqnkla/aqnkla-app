using System.Threading.Tasks;
using Aqnkla.Client.Webapi.Controllers.Base;
using Aqnkla.Domain.Key.Service;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value;
using Aqnkla.Food.Ingredient.Service.Item;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers.Food.Ingredient
{
    [Route("food/ingredient/item")]
    [ApiController]
    public class IngredientItemController
        : DataController<IngredientItemEntity<ObjectId>, IngredientItemViewModel, ObjectId>
    {
        private readonly IIngredientItemService<ObjectId> ingredientItemService;

        public IngredientItemController(
            IIngredientItemService<ObjectId> ingredientItemService,
            IKeyService<ObjectId> keyService) : base(ingredientItemService, keyService)
        {
            this.ingredientItemService = ingredientItemService;
        }

        [HttpGet("all-data-values")]
        public async Task<ValuesViewModel> AllDataValues()
        {
            return await ingredientItemService.GetAllDataValuesAsync(GetCurrentLanguage());
        }
    }
}
