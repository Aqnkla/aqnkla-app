using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Item;

namespace Aqnkla.Food.Ingredient.Repository
{
    public interface IIngredientItemRepository<TKey> : IRepository<IngredientItemEntity<TKey>, TKey>
    {
    }
}
