using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Modules.Food.Ingredient
{
    public  class MongoDbIngredientItemRepository : MongoDbRepository<IngredientItemEntity<ObjectId>>, IIngredientItemRepository<ObjectId>
    {
        public MongoDbIngredientItemRepository(IOptions<MongoDbSettings> options) : base(options)
        {

        }
    }
}
