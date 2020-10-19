using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_attribute_type.csv")]
    [Description("")]
    public class FoodAtributeType
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

        [FieldHeader("food_attribute_type_id")]
        [DisplayName("")]
        [Description("")]
        public int FoodAttributeTypeId { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }

        [FieldHeader("value")]
        [DisplayName("")]
        [Description("")]
        public int Value { get; set; }
    }
}
