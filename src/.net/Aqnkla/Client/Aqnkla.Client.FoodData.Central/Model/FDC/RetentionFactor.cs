using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class RetentionFactor
    {
        public int id { get; set; }
        public int code { get; set; }
        public int food_group_id { get; set; }
        public string description { get; set; }




        //1,1,1,CHEESE, BAKED
        //2,3,1,CHEESE, BROILED
        //3,5,1,CHEESE, COOKED W/LIQUID
        //4,7,1,CHEESE, REHEATED
        //5,101,1,EGGS, BAKED
        //6,103,1,EGGS, FRIED, SCRAMBLED
        //7,105,1,EGGS, HARD COOKED
        //8,107,1,EGGS, POACHED
        //9,109,1,EGGS, REHEATED
        //10,151,9,FRUITS, FRESH(NOT CITRUS), BAKED
        //11,152,9,FRUITS, FRESH(NOT CITRUS), BROILED
        //12,153,9,FRUITS, FRESH(NOT CITRUS), SAUTEED
        //13,154,9,FRUITS, CANNED
        //14,155,9,FRUITS, FRESH(NOT CITRUS), STEWED
        //15,156,9,FRUITS, FROZEN
        //16,157,9,FRUITS, FRESH(NOT CITRUS), REHEATED
        //17,158,9,FRUITS, DRIED
        //18,251,9,FRUITS(DRIED), BAKED
        //19,253,9,FRUITS(DRIED), SAUTEED
        //20,255,9,FRUITS(DRIED), STEWED
    }
}
