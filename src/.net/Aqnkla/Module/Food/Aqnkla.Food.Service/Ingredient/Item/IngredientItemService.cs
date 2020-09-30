using Aqnkla.Domain.Key.Service;
using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Ingredient.Entity.Item;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Food.Ingredient.Service.Item;
using Aqnkla.Service.Base;
using System.Linq;

namespace Aqnkla.Food.Service.Ingredient.Item
{
    public class IngredientItemService<TKey>
        : BaseViewService<IngredientItemEntity<TKey>, IngredientItemViewModel, TKey>, IIngredientItemService<TKey>
    {
        private readonly IKeyService<TKey> keyService;
        private readonly IIngredientILanguageService ingredientILanguageService;

        public IngredientItemService(
            IIngredientItemRepository<TKey> repository,
            IKeyService<TKey> keyService,
            IIngredientILanguageService ingredientILanguageService) : base(repository)
        {
            this.keyService = keyService;
            this.ingredientILanguageService = ingredientILanguageService;
        }

        public override IngredientItemEntity<TKey> MapToEntity(IngredientItemViewModel vievModel)
        {
            var entity = new IngredientItemEntity<TKey>
            {
                Id = keyService.ParseKey(vievModel.Id),
                CategoryId = keyService.ParseKey(vievModel.CategoryId),
                Name = vievModel.Name,
                Description = vievModel.Description,
                Calories = vievModel.Calories,
                CarbsTotal = vievModel.CarbsTotal,
                FatTotal = vievModel.FatTotal,
                Protein = vievModel.Protein,
                IsVolumeDefault = vievModel.IsVolumeDefault,
                IsVolumeAllowed = vievModel.IsVolumeAllowed,
                VolumeAverageDensity = vievModel.VolumeAverageDensity,
                Fiber = vievModel.Fiber,
                IsQuantityAllowed = vievModel.IsQuantityAllowed,
                Allergens = vievModel.Allergens.ToDictionary(b => b.Allergen, b => b.Importance),
                AminoAcids = vievModel.AminoAcids.ToDictionary(b => b.AminoAcid, b => b.WeightGrams),
                Carbohydrates = vievModel.Carbohydrates.ToDictionary(b => b.Carbohydrate, b => b.WeightGrams),
                Cholesterol = vievModel.Cholesterol.ToDictionary(b => b.Cholesterol, b => b.WeightGrams),
                Fats = vievModel.Fats.ToDictionary(b => b.Fat, b => b.WeightGrams),
                Minerals = vievModel.Minerals.ToDictionary(b => b.Mineral, b => b.WeightGrams),
                Vitamins = vievModel.Vitamins.ToDictionary(b => b.Vitamin, b => b.WeightGrams),
                QuantityAvgWeights = vievModel.QuantityAvgWeights.ToDictionary(b => b.Quantity, b => b.WeightGrams)
            };

            return entity;
        }

        public override IngredientItemViewModel MapToViewModel(IngredientItemEntity<TKey> entity, LanguageValue language)
        {
            var viewModel = new IngredientItemViewModel
            {
                Id = keyService.GetKeyString(entity.Id),
                CategoryId = keyService.GetKeyString(entity.CategoryId),
                Name = entity.Name,
                Description = entity.Description,
                Calories = entity.Calories,
                CarbsTotal = entity.CarbsTotal,
                FatTotal = entity.FatTotal,
                Protein = entity.Protein,
                IsVolumeDefault = entity.IsVolumeDefault,
                IsVolumeAllowed = entity.IsVolumeAllowed,
                VolumeAverageDensity = entity.VolumeAverageDensity,
                Fiber = entity.Fiber,
                IsQuantityAllowed = entity.IsQuantityAllowed,
                Allergens = entity.Allergens.Select(b => new AllergenViewModel
                {
                    Allergen = b.Key,
                    AllergenLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    Importance = b.Value,
                    ImportanceLabel = ingredientILanguageService.GetLabel(b.Value, language)
                }).ToList(),
                AminoAcids = entity.AminoAcids.Select(b => new AminoAcidViewModel
                {
                    AminoAcid = b.Key,
                    AminoAcidLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                Carbohydrates = entity.Carbohydrates.Select(b => new CarbohydrateViewModel
                {
                    Carbohydrate = b.Key,
                    CarbohydrateLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                Cholesterol = entity.Cholesterol.Select(b => new CholesterolViewModel
                {
                    Cholesterol = b.Key,
                    CholesterolLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                Fats = entity.Fats.Select(b => new FatViewModel
                {
                    Fat = b.Key,
                    FatLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                Minerals = entity.Minerals.Select(b => new MineralViewModel
                {
                    Mineral = b.Key,
                    MineralLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                QuantityAvgWeights = entity.QuantityAvgWeights.Select(b => new QuantityItemSizeViewModel
                {
                    Quantity = b.Key,
                    QuantityLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList(),
                Vitamins = entity.Vitamins.Select(b => new VitaminViewModel
                {
                    Vitamin = b.Key,
                    VitaminLabel = ingredientILanguageService.GetLabel(b.Key, language),
                    WeightGrams = b.Value
                }).ToList()

            };


            return viewModel;
        }
    }
}
