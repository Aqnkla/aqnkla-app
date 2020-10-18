using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodNutrient
    {
        public int id { get; set; }
        public int fdc_id { get; set; }
        public int nutrient_id { get; set; }
        public int amount { get; set; }
        public int data_points { get; set; }
        public int derivation_id { get; set; }
        public int min { get; set; }
        public int max { get; set; }
        public int median { get; set; }
        public string footnote { get; set; }
        public int min_year_acquired { get; set; }




        //3639112,344604,1089,0,,75,,,,,
        //3639113,344604,1110,0,,75,,,,,
        //3639114,344604,1253,0,,75,,,,,
        //3639115,344604,1258,0,,75,,,,,
        //6320396,344604,1003,0.81,,71,,,,,
        //6320397,344604,1004,0.41,,71,,,,,
        //6320398,344604,1005,4.07,,71,,,,,
        //6320399,344604,1008,24,,71,,,,,
        //6320400,344604,2000,2.44,,71,,,,,
        //6320401,344604,1079,0.8,,71,,,,,
        //6320402,344604,1082,0,,71,,,,,
        //6320403,344604,1084,0,,71,,,,,
    }
}
