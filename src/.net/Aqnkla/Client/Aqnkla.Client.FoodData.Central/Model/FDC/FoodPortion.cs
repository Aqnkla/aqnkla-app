using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_portion.csv")]
    [Description("")]
    public class FoodPortion
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("seq_num")]
        [DisplayName("")]
        [Description("")]
        public int SeqNum { get; set; }

        [FieldHeader("amount")]
        [DisplayName("")]
        [Description("")]
        public int Amount { get; set; }

        [FieldHeader("measure_unit_id")]
        [DisplayName("")]
        [Description("")]
        public int MeasureUnitId { get; set; }

        [FieldHeader("portion_description")]
        [DisplayName("")]
        [Description("")]
        public string PortionDescription { get; set; }

        [FieldHeader("modifier")]
        [DisplayName("")]
        [Description("")]
        public string Modifier { get; set; }

        [FieldHeader("gram_weight")]
        [DisplayName("")]
        [Description("")]
        public int GramWeight { get; set; }

        [FieldHeader("data_points")]
        [DisplayName("")]
        [Description("")]
        public int DataPoints { get; set; }

        [FieldHeader("footnote")]
        [DisplayName("")]
        [Description("")]
        public string Footnote { get; set; }

        [FieldHeader("min_year_acquired")]
        [DisplayName("")]
        [Description("")]
        public int MinYearAcquired { get; set; }
    }
}
