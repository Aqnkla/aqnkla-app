using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value;
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

        public ValuesViewModel Values { get; set; }

        public bool IsQuantityAllowed { get; set; }

        public bool IsVolumeAllowed { get; set; }

        public double VolumeAverageDensity { get; set; }

        public bool IsVolumeDefault { get; set; }
    }
}
