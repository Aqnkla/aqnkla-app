using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class Nutrient
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("name")]
        [DisplayName("")]
        [Description("")]
        public string Name { get; set; }

        [FieldHeader("unit_name")]
        [DisplayName("")]
        [Description("")]
        public string UnitName { get; set; }

        [FieldHeader("nutrient_nbr")]
        [DisplayName("")]
        [Description("")]
        public int NutrientNbr { get; set; }

        [FieldHeader("rank")]
        [DisplayName("")]
        [Description("")]
        public int Rank { get; set; }
    }
}
