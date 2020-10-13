using Aqnkla.Domain.Base.Service;
using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value;
using System.Threading.Tasks;

namespace Aqnkla.Food.Ingredient.Service.Item
{
    public interface IIngredientItemService<TKey> : IViewService<IngredientItemEntity<TKey>, IngredientItemViewModel, TKey>
    {
        public Task<ValuesViewModel> GetAllDataValuesAsync(LanguageValue language);
    }
}
