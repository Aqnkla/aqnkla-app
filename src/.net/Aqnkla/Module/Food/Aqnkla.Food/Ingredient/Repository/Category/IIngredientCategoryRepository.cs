using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Category;

namespace Aqnkla.Food.Ingredient.Repository
{
    public interface IIngredientCategoryRepository<TKey> : IRepository<IngredientCategoryEntity<TKey>, TKey>
    {
    }
}
