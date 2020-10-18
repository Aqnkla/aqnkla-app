using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FnddsIngredientNutrientValue
    {
        [FieldHeader("Ingredient code")]
        [DisplayName("")]
        [Description("")]
        public int IngredientCode { get; set; }

        [FieldHeader("SR description")]
        [DisplayName("")]
        [Description("")]
        public string SrDescription { get; set; }

        [FieldHeader("Nutrient code")]
        [DisplayName("")]
        [Description("")]
        public int NutrientCode { get; set; }

        [FieldHeader("Nutrient value")]
        [DisplayName("")]
        [Description("")]
        public double NutrientValue { get; set; }

        [FieldHeader("Nutrient value source")]
        [DisplayName("")]
        [Description("")]
        public string NutrientValueSource { get; set; }

        [FieldHeader("SR 28 derivation code")]
        [DisplayName("")]
        [Description("")]
        public int Sr28DerivationCode { get; set; }

        [FieldHeader("SR 28 AddMod year")]
        [DisplayName("")]
        [Description("")]
        public int Sr28AddModYear { get; set; }

        [FieldHeader("Start date")]
        [DisplayName("")]
        [Description("")]
        public DateTime StartDate { get; set; }

        [FieldHeader("End date")]
        [DisplayName("")]
        [Description("")]
        public DateTime EndDate { get; set; }
    }
}
