using Aqnkla.Domain.Base.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient
{
    public class IngredientCategoryModel<TKey> : BaseEntity<TKey>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public TKey ParentCategoryId { get; set; }
    }
}
