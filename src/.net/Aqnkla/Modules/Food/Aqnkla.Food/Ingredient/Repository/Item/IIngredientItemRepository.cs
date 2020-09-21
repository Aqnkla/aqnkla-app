using Aqnkla.Domain.Base.Repository;
using Aqnkla.Food.Ingredient.Entity.Item;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Repository
{
    public interface IIngredientItemRepository<TKey> : IRepository<IngredientItemEntity<TKey>, TKey>
    {
    }
}
