using Aqnkla.Domain.Base.Entity;
using Aqnkla.Food.Common.Unit.Quantity;
using Aqnkla.Food.Ingredient.Entity.Item.Allergen;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.AminoAcid;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Carbohydrate;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Cholesterol;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Fat;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Mineral;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Vitamin;
using System.Collections.Generic;

namespace Aqnkla.Food.Ingredient.Entity.Item
{
    public class IngredientItemEntity<TKey> : BaseEntity<TKey>
    {
        public TKey CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Calories { get; set; }
        public int Protein { get; set; }
        public int FatTotal { get; set; }
        public int CarbsTotal { get; set; }
        public int Fiber { get; set; }
        public Dictionary<CholesterolType, double> Cholesterol { get; set; }
        public Dictionary<CarbohydrateType, double> Carbohydrates { get; set; }

        public Dictionary<AminoAcidType, double> AminoAcids { get; set; }
        public Dictionary<FatType, double> Fats { get; set; }
        public Dictionary<MineralType, double> Minerals { get; set; }
        public Dictionary<VitaminType, double> Vitamins { get; set; }
        public Dictionary<AllergenType, AllergenImportance> Allergens { get; set; }
        public bool IsQuantityAllowed { get; set; }
        public Dictionary<QuantityItemSize, double> QuantityAvgWeights { get; set; }
        public bool IsVolumeAllowed { get; set; }
        public double VolumeAverageDensity { get; set; }
        public bool IsVolumeDefault { get; set; }
    }
}
