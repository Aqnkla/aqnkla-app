using Aqnkla.Domain.Language.Model;
using System;

namespace Aqnkla.Food.Ingredient.Service.Item
{
    public interface IIngredientILanguageService
    {
        string GetLabel<T>(T key, LanguageValue language) where T : struct, IConvertible;
    }
}
