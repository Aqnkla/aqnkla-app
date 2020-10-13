using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Fat;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value
{
    [ExportViewModel]
    public class FatViewModel
    {
        public FatType Fat { get; set; }
        public string FatLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}