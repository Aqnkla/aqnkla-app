using Aqnkla.Domain.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value
{
    [ExportViewModel]
    public class ValuesViewModel
    {
        public List<CholesterolViewModel> Cholesterol { get; set; }

        public List<CarbohydrateViewModel> Carbohydrates { get; set; }

        public List<AminoAcidViewModel> AminoAcids { get; set; }

        public List<FatViewModel> Fats { get; set; }

        public List<MineralViewModel> Minerals { get; set; }

        public List<VitaminViewModel> Vitamins { get; set; }

        public List<AllergenViewModel> Allergens { get; set; }
        public List<QuantityItemSizeViewModel> QuantityAvgWeights { get; set; }
    }
}
