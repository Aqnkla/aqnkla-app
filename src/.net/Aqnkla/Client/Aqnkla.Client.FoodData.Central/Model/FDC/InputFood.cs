using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("input_food.csv")]
    [Description("")]
    public class InputFood
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("fdc_id_of_input_food")]
        [DisplayName("")]
        [Description("")]
        public string FdcIdOfInputFood { get; set; }

        [FieldHeader("seq_num")]
        [DisplayName("")]
        [Description("")]
        public int SeqNum { get; set; }

        [FieldHeader("amount")]
        [DisplayName("")]
        [Description("")]
        public double Amount { get; set; }

        [FieldHeader("sr_code")]
        [DisplayName("")]
        [Description("")]
        public int SrCode { get; set; }

        [FieldHeader("sr_description")]
        [DisplayName("")]
        [Description("")]
        public string SrDescription { get; set; }

        [FieldHeader("unit")]
        [DisplayName("")]
        [Description("")]
        public string Unit { get; set; }

        [FieldHeader("portion_code")]
        [DisplayName("")]
        [Description("")]
        public int PortionCode { get; set; }

        [FieldHeader("portion_description")]
        [DisplayName("")]
        [Description("")]
        public string PortionDescription { get; set; }

        [FieldHeader("gram_weight")]
        [DisplayName("")]
        [Description("")]
        public string GramWeight { get; set; }

        [FieldHeader("retention_code")]
        [DisplayName("")]
        [Description("")]
        public int RetentionCode { get; set; }

        [FieldHeader("survey_flag")]
        [DisplayName("")]
        [Description("")]
        public int SurveyFlag { get; set; }
    }
}
