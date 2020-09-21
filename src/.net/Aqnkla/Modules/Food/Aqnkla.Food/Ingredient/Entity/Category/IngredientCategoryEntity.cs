using Aqnkla.Domain.Base.Entity;

namespace Aqnkla.Food.Ingredient.Entity.Category
{
    public class IngredientCategoryEntity<TKey> : BaseEntity<TKey>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public TKey ParentCategoryId { get; set; }
    }
}
