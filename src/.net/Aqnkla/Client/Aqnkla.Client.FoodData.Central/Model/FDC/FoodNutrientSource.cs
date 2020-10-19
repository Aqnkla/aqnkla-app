using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_nutrient_source.csv")]
    [Description("")]
    public class FoodNutrientSource
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("code")]
        [DisplayName("")]
        [Description("")]
        public int Code { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }
    }
}
