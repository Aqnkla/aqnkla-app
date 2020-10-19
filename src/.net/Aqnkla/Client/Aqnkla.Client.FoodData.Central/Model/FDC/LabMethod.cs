using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("lab_method.csv")]
    [Description("")]
    public class LabMethod
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }

        [FieldHeader("technique")]
        [DisplayName("")]
        [Description("")]
        public string Technique { get; set; }
    }
}
