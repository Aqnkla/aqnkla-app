using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodNutrientSource
    {
        public int id { get; set; }
        public int code { get; set; }
        public string description { get; set; }




        //1,1,Analytical or derived from analytical
        //2,4,Calculated or imputed
        //3,5,Value manufacturer based label claim for added nutrients
        //4,6,Aggregated data involving combinations of source codes 1, 6, 12 and/or 13
        //5,7,Assumed zero
    }
}
