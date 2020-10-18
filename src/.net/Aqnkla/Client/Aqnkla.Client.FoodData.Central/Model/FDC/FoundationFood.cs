using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoundationFood
    {

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("NDB_number")]
        [DisplayName("")]
        [Description("")]
        public int NdbNumber { get; set; }

        [FieldHeader("footnote")]
        [DisplayName("")]
        [Description("")]
        public string Footnote { get; set; }
    }
}
