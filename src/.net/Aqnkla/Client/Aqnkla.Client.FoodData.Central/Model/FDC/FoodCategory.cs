using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_category.csv")]
    [Description("")]
    public class FoodCategory
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("code")]
        [DisplayName("")]
        [Description("")]
        public string Code { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }
    }
}
