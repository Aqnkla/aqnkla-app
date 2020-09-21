using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Category;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Repository
{
    public interface IIngredientCategoryRepository<TKey> : IRepository<IngredientCategoryEntity<TKey>, TKey>
    {
    }
}
