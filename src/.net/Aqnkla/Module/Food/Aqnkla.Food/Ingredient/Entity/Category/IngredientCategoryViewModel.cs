using Aqnkla.Domain.Attributes;
using Aqnkla.Domain.Base.Entity;

namespace Aqnkla.Food.Ingredient.Entity.Category
{
    [ExportViewModel]
    public class IngredientCategoryViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ParentCategoryId { get; set; }

    }
}
