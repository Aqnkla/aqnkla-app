using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class WweiaFoodCategory
    {
        [FieldHeader("wweia_food_category_code")]
        [DisplayName("")]
        [Description("")]
        public int WweiaFoodCategoryCode { get; set; }


        [FieldHeader("wweia_food_category_description")]
        [DisplayName("")]
        [Description("")]
        public string WweiaFoodCategoryDescription { get; set; }
    }
}
