using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodProteinConversionFactor
    {

        [FieldHeader("food_nutrient_conversion_factor_id")]
        [DisplayName("")]
        [Description("")]
        public int FoodNutrientConversionFactorId { get; set; }

        [FieldHeader("value")]
        [DisplayName("")]
        [Description("")]
        public double Value { get; set; }
    }
}
