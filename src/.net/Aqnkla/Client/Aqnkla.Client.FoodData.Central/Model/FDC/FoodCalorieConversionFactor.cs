using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodCalorieConversionFactor
    {

        [FieldHeader("food_nutrient_conversion_factor_id")]
        [DisplayName("")]
        [Description("")]
        public int FoodNutrientConversionFactorId { get; set; }

        [FieldHeader("protein_value")]
        [DisplayName("")]
        [Description("")]
        public double ProteinValue { get; set; }

        [FieldHeader("fat_value")]
        [DisplayName("")]
        [Description("")]
        public double FatValue { get; set; }

        [FieldHeader("carbohydrate_value")]
        [DisplayName("")]
        [Description("")]
        public double CarbohydrateValue { get; set; }
    }
}
