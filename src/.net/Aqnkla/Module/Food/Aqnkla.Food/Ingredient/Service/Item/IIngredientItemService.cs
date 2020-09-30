using Aqnkla.Domain.Base.Service;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;

namespace Aqnkla.Food.Ingredient.Service.Item
{
    public interface IIngredientItemService<TKey> : IViewService<IngredientItemEntity<TKey>, IngredientItemViewModel, TKey>
    {
    }
}
