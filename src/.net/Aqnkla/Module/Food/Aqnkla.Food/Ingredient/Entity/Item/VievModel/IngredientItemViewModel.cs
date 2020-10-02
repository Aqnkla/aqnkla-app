using Aqnkla.Domain.Attributes;
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Email.Model;
using Aqnkla.Domain.Language.Model;
using Aqnkla.Domain.User.Extension;
using System.Collections.Generic;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel
{
    [ExportViewModel]
    public class IngredientItemViewModel
    {
        public string Id { get; set; }
        public string CategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Calories { get; set; }

        public int Protein { get; set; }

        public int FatTotal { get; set; }

        public int CarbsTotal { get; set; }

        public int Fiber { get; set; }

        public List<CholesterolViewModel> Cholesterol { get; set; }

        public List<CarbohydrateViewModel> Carbohydrates { get; set; }

        public List<AminoAcidViewModel> AminoAcids { get; set; }

        public List<FatViewModel> Fats { get; set; }

        public List<MineralViewModel> Minerals { get; set; }

        public List<VitaminViewModel> Vitamins { get; set; }

        public List<AllergenViewModel> Allergens { get; set; }

        public bool IsQuantityAllowed { get; set; }
        public List<QuantityItemSizeViewModel> QuantityAvgWeights { get; set; }

        public bool IsVolumeAllowed { get; set; }

        public double VolumeAverageDensity { get; set; }

        public bool IsVolumeDefault { get; set; }

        public Sex SendModeler { get; set; }
        public List<LanguageValue> SomeList { get; set; }
    }
}
