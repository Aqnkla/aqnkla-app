using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food.csv")]
    [Description("")]
    public class Food
    {

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("data_type")]
        [DisplayName("")]
        [Description("")]
        public string DataType { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }

        [FieldHeader("food_category_id")]
        [DisplayName("")]
        [Description("")]
        public string FoodCategoryId { get; set; }

        [FieldHeader("publication_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime PublicationDate { get; set; }
    }
}
