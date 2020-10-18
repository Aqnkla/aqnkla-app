using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class InputFood
    {
        public int id { get; set; }
        public int fdc_id { get; set; }
        public string fdc_id_of_input_food { get; set; }
        public int seq_num { get; set; }
        public double amount { get; set; }
        public int sr_code { get; set; }
        public string sr_description { get; set; }
        public string unit { get; set; }
        public int portion_code { get; set; }
        public string portion_description { get; set; }
        public string gram_weight { get; set; }
        public int retention_code { get; set; }
        public int survey_flag { get; set; }




        //47230,781082,,1,100,1107,Milk, human, mature, fluid,GM,0,NONE,100,0,
        //47231,781083,,1,35,1077,Milk, whole, 3.25% milkfat, with added vitamin D,GM,0,NONE,35,0,
        //47232,781083,,2,37,1079,Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D,GM,0,NONE,37,0,
        //47233,781083,,3,17,1082,Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D,GM,0,NONE,17,0,
        //47234,781083,,4,11,1085,Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim),GM,0,NONE,11,0,
        //47235,781084,,1,100,1077,Milk, whole, 3.25% milkfat, with added vitamin D,GM,0,NONE,100,0,
        //47236,781085,,1,100,1089,Milk, low sodium, fluid,GM,0,NONE,100,0,
        //47237,781086,,1,100,1077,Milk, whole, 3.25% milkfat, with added vitamin D,GM,0,NONE,100,0,
    }
}
