using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_attribute.csv")]
    [Description("")]
    public class FoodAttribute
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }
    }
}
