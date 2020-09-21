﻿using Aqnkla.Domain.Base.Service;
using Aqnkla.Food.Ingredient.Entity.Item;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Service.Item
{
    public interface IIngredientItemService<TKey> : IService<IngredientItemEntity<TKey>, TKey>
    {
    }
}
