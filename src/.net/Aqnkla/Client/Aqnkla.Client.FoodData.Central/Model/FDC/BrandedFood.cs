using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class BrandedFood
    {
        public int fdc_id { get; set; }
        public string brand_owner { get; set; }
        public string gtin_upc { get; set; }
        public string ingredients { get; set; }
        public string serving_size { get; set; }
        public string serving_size_unit { get; set; }
        public string household_serving_fulltext { get; set; }
        public string branded_food_category { get; set; }
        public string data_source { get; set; }
        public DateTime modified_date { get; set; }
        public DateTime available_date { get; set; }
        public string market_country { get; set; }
        public DateTime discontinued_date { get; set; }


    }
}
