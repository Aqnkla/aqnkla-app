using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Cholesterol;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value
{
    [ExportViewModel]
    public class CholesterolViewModel
    {
        public CholesterolType Cholesterol { get; set; }
        public string CholesterolLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}