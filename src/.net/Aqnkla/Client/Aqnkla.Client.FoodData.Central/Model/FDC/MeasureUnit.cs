using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("measure_unit.csv")]
    [Description("")]
    public class MeasureUnit
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }
    }
}
