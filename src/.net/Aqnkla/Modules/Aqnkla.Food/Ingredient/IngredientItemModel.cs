using Aqnkla.Domain.Base.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient
{
   public class IngredientItemModel<TKey> : BaseEntity<TKey>
    {
        public TKey CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Calories { get; set; }
        public int Protein { get; set; }
        public int Fat { get; set; }
        public int Carbs { get; set; }
        public int Fiber { get; set; }
        //public ItemData<Mineral>[] Minerals { get; set; }
        //public ItemData<Vitamin>[] Vitamins { get; set; }
        //public AllergenValue[] Allergens { get; set; }
        public bool IsPieceAllowed { get; set; }
        public int PieceAvgWeight { get; set; }
        public bool IsVolumeAllowed { get; set; }
        public int AverageDensity { get; set; }
        public bool IsVolumeDefault { get; set; }
    }
}
