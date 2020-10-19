using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_nutrient_conversion_factor.csv")]
    [Description("")]
    public class FoodNutrientConversionFactor
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }
    }
}
