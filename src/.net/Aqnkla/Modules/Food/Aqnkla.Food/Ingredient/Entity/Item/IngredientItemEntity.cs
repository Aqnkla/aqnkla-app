using Aqnkla.Domain.Base.Entity;
using Aqnkla.Food.Common.Unit.Quantity;
using Aqnkla.Food.Ingredient.Entity.Item.Allergen;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData;
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
        public Dictionary<CholesterolType, ItemValue> Cholesterol { get; set; }
        public Dictionary<CarbohydrateType, ItemValue> Carbohydrates { get; set; }

        public Dictionary<AminoAcidType, ItemValue> AminoAcids { get; set; }
        public Dictionary<FatType, ItemValue> Fats { get; set; }
        public Dictionary<MineralType, ItemValue> Minerals { get; set; }
        public Dictionary<VitaminType, ItemValue> Vitamins { get; set; }
        public Dictionary<AllergenType, AllergenImportance> Allergens { get; set; }
        public bool IsPieceAllowed { get; set; }
        public Dictionary<QuantityItemSize, decimal> PieceAvgWeights { get; set; }
        public bool IsVolumeAllowed { get; set; }
        public int AverageDensity { get; set; }
        public bool IsVolumeDefault { get; set; }
    }
}
