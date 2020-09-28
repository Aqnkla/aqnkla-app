using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Food.Ingredient.Service.Item;
using Aqnkla.Service.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Service.Ingredient.Item
{
    public class IngredientItemService<TKey>
        : BaseViewService<IngredientItemEntity<TKey>, IngredientItemViewModel, TKey>, IIngredientItemService<TKey>
    {
        public IngredientItemService(IIngredientItemRepository<TKey> repository) : base(repository)
        {
        }

        public override IngredientItemEntity<TKey> MapToEntity(IngredientItemViewModel vievModel)
        {
            throw new NotImplementedException();
        }

        public override IngredientItemViewModel MapToViewModel(IngredientItemEntity<TKey> entity)
        {
            throw new NotImplementedException();
        }
    }
}
