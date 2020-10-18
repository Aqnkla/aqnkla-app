using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodAttribute
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }




        //998,Update Log,Changes that were made to this food
        //999,Attribute,Generic attributes
        //1000,Common Name,Common names associated with a food.
        //1001,Additional Description,Additional descriptions for the food.
        //1002,Adjustments,Adjustments made to foods, including moisture changes
    }
}
