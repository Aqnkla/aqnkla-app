using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Carbohydrate;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class CarbohydrateViewModel
    {
        public CarbohydrateType Carbohydrate { get; set; }
        public string CarbohydrateLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}