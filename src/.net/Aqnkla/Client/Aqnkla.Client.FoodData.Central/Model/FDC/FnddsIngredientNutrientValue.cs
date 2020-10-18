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
        public int IngredientCode { get; set; }

        [FieldHeader("SR description")]
        public string SrDescription { get; set; }

        [FieldHeader("Nutrient code")]
        public int NutrientCode { get; set; }

        [FieldHeader("Nutrient value")]
        public double NutrientValue { get; set; }

        [FieldHeader("Nutrient value source")]
        public string NutrientValueSource { get; set; }

        [FieldHeader("SR 28 derivation code")]
        public int Sr28DerivationCode { get; set; }

        [FieldHeader("SR 28 AddMod year")]
        public int Sr28AddModYear { get; set; }

        [FieldHeader("Start date")]
        public DateTime StartDate { get; set; }

        [FieldHeader("End date")]
        public DateTime EndDate { get; set; }


        //1001,Butter, salted,203,0.85,SR28,,1976,2015-01-01 00:00:00.0,2016-12-31 00:00:00.0
        //1001,Butter, salted,204,81.11,SR28,,1976,2015-01-01 00:00:00.0,2016-12-31 00:00:00.0
        //1001,Butter, salted,205,0.06,SR28,NC,1976,2015-01-01 00:00:00.0,2016-12-31 00:00:00.0
    }
}
