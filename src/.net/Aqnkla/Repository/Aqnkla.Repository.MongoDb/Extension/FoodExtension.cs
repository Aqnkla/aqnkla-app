using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Repository.MongoDb.Modules.Food.Category;
using Aqnkla.Repository.MongoDb.Modules.Food.Ingredient;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Extension
{
    public static class FoodExtension
    {
        public static void RegisterMongoDbFood(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IIngredientCategoryRepository<ObjectId>, MongoDbIngredientCategoryRepository>();
            serviceCollection.AddSingleton<IIngredientItemRepository<ObjectId>, MongoDbIngredientItemRepository>();

        }
    }
}
