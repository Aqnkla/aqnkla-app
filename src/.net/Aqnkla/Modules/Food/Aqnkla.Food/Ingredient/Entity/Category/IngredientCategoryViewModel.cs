using Aqnkla.Domain.Base.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Entity.Category
{
    public class IngredientCategoryViewModel : BaseViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ParentCategoryId { get; set; }

    }
}
