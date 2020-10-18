using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;



namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class NutrientIncomingName
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }

        [FieldHeader("nutrient_id")]
        [DisplayName("")]
        [Description("")]
        public int NutrientId { get; set; }
    }
}
