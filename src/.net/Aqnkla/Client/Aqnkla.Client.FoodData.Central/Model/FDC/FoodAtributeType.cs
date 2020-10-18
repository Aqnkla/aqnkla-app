using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodAtributeType
    {
        public int id { get; set; }
        public int fdc_id { get; set; }
        public int seq_num { get; set; }
        public int food_attribute_type_id { get; set; }
        public string name { get; set; }
        public int value { get; set; }




        //65890,604974,,998,Nutrient Updated,4
        //65892,604974,,998,Food Category,1
        //65894,604974,,998,Serving Size,7
        //65896,604974,,998,Ingredients,3
        //65898,604974,,998,Nutrient Added,5
        //65900,604974,,998,Description,2
        //65902,604974,,998,Nutrient Removed,6
        //65904,604976,,998,Food Category,1
        //65906,604976,,998,Nutrient Updated,4
        //65908,604976,,998,Description,2
        //65910,604976,,998,Nutrient Removed,6
        //65912,604976,,998,Ingredients,3
    }
}
