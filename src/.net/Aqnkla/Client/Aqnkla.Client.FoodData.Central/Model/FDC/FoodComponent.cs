using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_component.csv")]
    [Description("")]
    public class FoodComponent
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }

        [FieldHeader("pct_weight")]
        [DisplayName("")]
        [Description("")]
        public string PctWeight { get; set; }

        [FieldHeader("is_refuse")]
        [DisplayName("")]
        [Description("")]
        public string IsRefuse { get; set; }

        [FieldHeader("gram_weight")]
        [DisplayName("")]
        [Description("")]
        public double GramWeight { get; set; }

        [FieldHeader("data_points")]
        [DisplayName("")]
        [Description("")]
        public double DataPoints { get; set; }

        [FieldHeader("min_year_acquired")]
        [DisplayName("")]
        [Description("")]
        public int MinYearAcquired { get; set; }
    }
}
