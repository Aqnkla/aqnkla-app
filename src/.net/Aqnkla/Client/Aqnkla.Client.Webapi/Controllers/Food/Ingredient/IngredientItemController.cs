using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aqnkla.Client.Webapi.Controllers.Base;
using Aqnkla.Domain.Key.Service;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Service.Item;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers.Food.Ingredient
{
    [Route("food/ingredient/item")]
    [ApiController]
    public class IngredientItemController : DataController<IngredientItemEntity<ObjectId>, ObjectId>
    {
        public IngredientItemController(
            IIngredientItemService<ObjectId> ingredientItemService,
            IKeyService<ObjectId> keyService) : base(ingredientItemService, keyService)
        {
        }
    }
}
