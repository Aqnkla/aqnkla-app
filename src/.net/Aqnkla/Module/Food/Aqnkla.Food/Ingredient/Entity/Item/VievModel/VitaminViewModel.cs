using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Vitamin;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class VitaminViewModel
    {
        public VitaminType Vitamin { get; set; }
        public string VitaminLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}