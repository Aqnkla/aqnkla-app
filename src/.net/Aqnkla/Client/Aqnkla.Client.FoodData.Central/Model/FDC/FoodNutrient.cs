using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("food_nutrient.csv")]
    [Description("")]
    public class FoodNutrient
    {

        [FieldHeader("id")]
        [DisplayName("")]
        [Description("")]
        public int Id { get; set; }

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }

        [FieldHeader("nutrient_id")]
        [DisplayName("")]
        [Description("")]
        public int NutrientId { get; set; }

        [FieldHeader("amount")]
        [DisplayName("")]
        [Description("")]
        public int Amount { get; set; }

        [FieldHeader("data_points")]
        [DisplayName("")]
        [Description("")]
        public int DataPoints { get; set; }

        [FieldHeader("derivation_id")]
        [DisplayName("")]
        [Description("")]
        public int DerivationId { get; set; }

        [FieldHeader("min")]
        [DisplayName("")]
        [Description("")]
        public int Min { get; set; }

        [FieldHeader("max")]
        [DisplayName("")]
        [Description("")]
        public int Max { get; set; }

        [FieldHeader("median")]
        [DisplayName("")]
        [Description("")]
        public int Median { get; set; }

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
