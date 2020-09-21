using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Category;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Food.Ingredient.Service;
using Aqnkla.Service.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Service.Ingredient.Category
{
    public class IngredientCategoryService<TKey> : BaseService<IngredientCategoryEntity<TKey>, TKey>, IIngredientCategoryService<TKey>
    {
        public IngredientCategoryService(IIngredientCategoryRepository<TKey> repository) : base(repository)
        {
        }
    }
}
