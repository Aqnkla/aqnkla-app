using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class SurveyFnddsFood
    {

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("food_code")]
        [DisplayName("")]
        [Description("")]
        public string Food_Code { get; set; }

        [FieldHeader("wweia_category_code")]
        [DisplayName("")]
        [Description("")]
        public string WweiaCategoryCode { get; set; }

        [FieldHeader("start_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime StartDate { get; set; }

        [FieldHeader("end_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime EndDate { get; set; }

    }
}
