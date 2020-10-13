using Aqnkla.Food.Ingredient.Service;
using Aqnkla.Food.Ingredient.Service.Item;
using Aqnkla.Food.Ingredient.Service.Item.Values;
using Aqnkla.Food.Service.Ingredient.Category;
using Aqnkla.Food.Service.Ingredient.Item;
using Aqnkla.Food.Service.Ingredient.Item.Values;
using Microsoft.Extensions.DependencyInjection;

namespace Aqnkla.Client.Webapi.Extensions
{
    public static class FoodExtension
    {
        public static void AddFoodObjects<TKey>(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IIngredientCategoryService<TKey>, IngredientCategoryService<TKey>>();
            serviceCollection.AddSingleton<IIngredientItemService<TKey>, IngredientItemService<TKey>>();
            serviceCollection.AddSingleton<IIngredientILanguageService, IngredientILanguageService>();
            serviceCollection.AddSingleton<IValuesService, ValuesService>();
        }
    }
}
