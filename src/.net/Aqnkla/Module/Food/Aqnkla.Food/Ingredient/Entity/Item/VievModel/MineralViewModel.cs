using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Mineral;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class MineralViewModel
    {
        public MineralType Mineral { get; set; }
        public string MineralLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}