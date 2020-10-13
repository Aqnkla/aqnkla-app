using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Common.Unit.Quantity;
using Aqnkla.Food.Ingredient.Entity.Item.Allergen;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.AminoAcid;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Carbohydrate;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Cholesterol;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Fat;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Mineral;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.Vitamin;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value;
using Aqnkla.Food.Ingredient.Service.Item;
using Aqnkla.Food.Ingredient.Service.Item.Values;
using System;
using System.Collections.Generic;

namespace Aqnkla.Food.Service.Ingredient.Item.Values
{
    public class ValuesService : IValuesService
    {
        private readonly IIngredientILanguageService ingredientILanguageService;

        public ValuesService(IIngredientILanguageService ingredientILanguageService)
        {
            this.ingredientILanguageService = ingredientILanguageService;
        }

        public List<AllergenViewModel> GetAllergenValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(AllergenType));
            var valuesImportance = Enum.GetValues(typeof(AllergenImportance));
            var list = new List<AllergenViewModel>();
            var length = values.Length > valuesImportance.Length ? values.Length : valuesImportance.Length;


            for (int i = 0; i < length; i++)
            {
                var model = new AllergenViewModel();

                if (values.Length < length)
                {
                    AllergenType value = (AllergenType)values.GetValue(i);
                    model.Allergen = value;
                    model.AllergenLabel = ingredientILanguageService.GetLabel(value, language);
                }

                if (valuesImportance.Length < length)
                {
                    AllergenImportance value = (AllergenImportance)valuesImportance.GetValue(i);
                    model.Importance = value;
                    model.ImportanceLabel = ingredientILanguageService.GetLabel(value, language);
                }

                list.Add(model);
            }
            return list;
        }

        public List<AminoAcidViewModel> GetAminoAcidsValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(AminoAcidType));
            var list = new List<AminoAcidViewModel>();
            foreach (var value in values)
            {
                var data = (AminoAcidType)value;
                list.Add(new AminoAcidViewModel
                {
                    AminoAcid = data,
                    AminoAcidLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<CarbohydrateViewModel> GetCarbohydratesValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(CarbohydrateType));
            var list = new List<CarbohydrateViewModel>();
            foreach (var value in values)
            {
                var data = (CarbohydrateType)value;
                list.Add(new CarbohydrateViewModel
                {
                    Carbohydrate = data,
                    CarbohydrateLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<CholesterolViewModel> GetCholesterolValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(CholesterolType));
            var list = new List<CholesterolViewModel>();
            foreach (var value in values)
            {
                var data = (CholesterolType)value;
                list.Add(new CholesterolViewModel
                {
                    Cholesterol = data,
                    CholesterolLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<FatViewModel> GetFatsValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(FatType));
            var list = new List<FatViewModel>();
            foreach (var value in values)
            {
                var data = (FatType)value;
                list.Add(new FatViewModel
                {
                    Fat = data,
                    FatLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<MineralViewModel> GetMineralsValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(MineralType));
            var list = new List<MineralViewModel>();
            foreach (var value in values)
            {
                var data = (MineralType)value;
                list.Add(new MineralViewModel
                {
                    Mineral = data,
                    MineralLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<QuantityItemSizeViewModel> GetQuantityAvgWeightsValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(QuantityItemSize));
            var list = new List<QuantityItemSizeViewModel>();
            foreach (var value in values)
            {
                var data = (QuantityItemSize)value;
                list.Add(new QuantityItemSizeViewModel
                {
                    Quantity = data,
                    QuantityLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }

        public List<VitaminViewModel> GetVitaminsValues(LanguageValue language)
        {
            var values = Enum.GetValues(typeof(VitaminType));
            var list = new List<VitaminViewModel>();
            foreach (var value in values)
            {
                var data = (VitaminType)value;
                list.Add(new VitaminViewModel
                {
                    Vitamin = data,
                    VitaminLabel = ingredientILanguageService.GetLabel(data, language)
                });
            }
            return list;
        }
    }
}
