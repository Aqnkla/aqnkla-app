using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class BrandedFood
    {

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("brand_owner")]
        [DisplayName("")]
        [Description("")]
        public string BrandOwner { get; set; }

        [FieldHeader("gtin_upc")]
        [DisplayName("")]
        [Description("")]
        public string GtinUpc { get; set; }

        [FieldHeader("ingredients")]
        [DisplayName("")]
        [Description("")]
        public string Ingredients { get; set; }

        [FieldHeader("serving_size")]
        [DisplayName("")]
        [Description("")]
        public string ServingSize { get; set; }

        [FieldHeader("serving_size_unit")]
        [DisplayName("")]
        [Description("")]
        public string ServingSizeUnit { get; set; }

        [FieldHeader("HouseholdServingFulltext")]
        [DisplayName("")]
        [Description("")]
        public string HouseholdServingFulltext { get; set; }

        [FieldHeader("branded_food_category")]
        [DisplayName("")]
        [Description("")]
        public string BrandedFoodCategory { get; set; }

        [FieldHeader("data_source")]
        [DisplayName("")]
        [Description("")]
        public string DataSource { get; set; }

        [FieldHeader("modified_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime ModifiedDate { get; set; }

        [FieldHeader("available_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime AvailableDate { get; set; }

        [FieldHeader("market_country")]
        [DisplayName("")]
        [Description("")]
        public string MarketCountry { get; set; }

        [FieldHeader("discontinued_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime DiscontinuedDate { get; set; }


    }
}
