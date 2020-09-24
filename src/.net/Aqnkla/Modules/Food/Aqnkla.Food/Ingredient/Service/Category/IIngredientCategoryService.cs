using Aqnkla.Domain.Base.Service;
using Aqnkla.Food.Ingredient.Entity.Category;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Service
{
    public interface IIngredientCategoryService<TKey> : IViewService<IngredientCategoryEntity<TKey>, IngredientCategoryViewModel, TKey>
    {
    }
}
