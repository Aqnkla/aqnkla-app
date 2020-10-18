using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class RetentionFactor
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("code")]
        [DisplayName("")]
        [Description("")]
        public int Code { get; set; }

        [FieldHeader("food_group_id")]
        [DisplayName("")]
        [Description("")]
        public int FoodGroupId { get; set; }

        [FieldHeader("description")]
        [DisplayName("")]
        [Description("")]
        public string Description { get; set; }
    }
}
