﻿using Aqnkla.Food.Ingredient.Service;
using Aqnkla.Food.Ingredient.Service.Item;
using Aqnkla.Food.Service.Ingredient.Category;
using Aqnkla.Food.Service.Ingredient.Item;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
