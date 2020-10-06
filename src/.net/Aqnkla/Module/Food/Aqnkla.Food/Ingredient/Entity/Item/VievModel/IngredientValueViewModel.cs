using Aqnkla.Domain.Attributes;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class IngredientValueViewModel
    {
        public string Id { get; set; }

        public double WeightGrams { get; set; }
    }
}
