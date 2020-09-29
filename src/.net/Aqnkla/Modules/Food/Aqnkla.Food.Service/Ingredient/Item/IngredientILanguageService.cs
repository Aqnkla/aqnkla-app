using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Ingredient.Service.Item;
using System;

namespace Aqnkla.Food.Service.Ingredient.Item
{
    public class IngredientILanguageService : IIngredientILanguageService
    {
        public string GetLabel<T>(T key, LanguageValue language) where T : struct, IConvertible
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("T must be an enumerated type");
            }

            return Enum.GetName(typeof(T), key);
        }
    }
}
