using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.ItemData.AminoAcid;

namespace Aqnkla.Food.Ingredient.Entity.Item.VievModel.Value
{
    [ExportViewModel]
    public class AminoAcidViewModel
    {
        public AminoAcidType AminoAcid { get; set; }
        public string AminoAcidLabel { get; set; }
        public double WeightGrams { get; set; }
    }
}