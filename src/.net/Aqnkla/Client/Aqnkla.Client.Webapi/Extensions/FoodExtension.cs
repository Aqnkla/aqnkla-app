using Microsoft.Extensions.DependencyInjection;

namespace Aqnkla.Client.Webapi.Extensions
{
    public static class FoodExtension
    {
        public static void AddFoodObjects<TKey>(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IIngredientCategoryService<TKey>, IngredientCategoryService<TKey>>();
            serviceCollection.AddSingleton<IIngredientItemService<TKey>, IngredientItemService<TKey>>();



        }
    }
}
