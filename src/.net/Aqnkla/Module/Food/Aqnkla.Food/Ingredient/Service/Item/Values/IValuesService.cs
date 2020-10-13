using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value;
using System.Collections.Generic;

namespace Aqnkla.Food.Ingredient.Service.Item.Values
{
    public interface IValuesService
    {
        public List<VitaminViewModel> GetVitaminsValues(LanguageValue language);

        public List<QuantityItemSizeViewModel> GetQuantityAvgWeightsValues(LanguageValue language);

        public List<MineralViewModel> GetMineralsValues(LanguageValue language);

        public List<FatViewModel> GetFatsValues(LanguageValue language);

        public List<CholesterolViewModel> GetCholesterolValues(LanguageValue language);

        public List<CarbohydrateViewModel> GetCarbohydratesValues(LanguageValue language);

        public List<AminoAcidViewModel> GetAminoAcidsValues(LanguageValue language);

        public List<AllergenViewModel> GetAllergenValues(LanguageValue language);
    }
}
