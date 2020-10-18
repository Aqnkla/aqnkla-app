using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodCategory
    {
        public int id { get; set; }
        public string code { get; set; }
        public string description { get; set; }



        //1,0100,Dairy and Egg Products
        //2,0200,Spices and Herbs
        //3,0300,Baby Foods
        //4,0400,Fats and Oils
        //5,0500,Poultry Products
    }
}
