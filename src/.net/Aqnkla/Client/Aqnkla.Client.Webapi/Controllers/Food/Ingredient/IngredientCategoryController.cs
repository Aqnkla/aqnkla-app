using System.Threading.Tasks;
using Aqnkla.Client.Webapi.Controllers.Base;
using Aqnkla.Domain.Key.Service;
using Aqnkla.Food.Ingredient.Entity.Category;
using Aqnkla.Food.Ingredient.Service;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers.Food.Ingredient
{
    [Route("food/ingredient/category")]
    [ApiController]
    public class IngredientCategoryController : DataController<IngredientCategoryEntity<ObjectId>, ObjectId>
    {
        public IngredientCategoryController(
            IIngredientCategoryService<ObjectId> ingredientCategoryService,
            IKeyService<ObjectId> keyService) : base(ingredientCategoryService, keyService)
        {

        }

        [HttpGet("test")]
        public async Task<IActionResult> Test()
        {
            return Ok(new { message = "Verification successful, you can now login" });
        }
    }
}
