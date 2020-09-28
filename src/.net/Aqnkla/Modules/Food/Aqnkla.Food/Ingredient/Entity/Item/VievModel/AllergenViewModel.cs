﻿using Aqnkla.Food.Ingredient.Entity.Item.Allergen;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    public class AllergenViewModel
    {
        public AllergenType Allergen { get; set; }
        public string AllergenLabel { get; set; }
        public AllergenImportance Importance { get; set; }
        public string ImportanceLabel { get; set; }
    }
}