using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Common.Unit.Quantity;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class QuantityItemSizeViewModel
    {
        public QuantityItemSize Quantity { get; set; }
        public string QuantityLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}