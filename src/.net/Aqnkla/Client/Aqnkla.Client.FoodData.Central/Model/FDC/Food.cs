using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class Food
    {
        public int fdc_id { get; set; }
        public string data_type { get; set; }
        public string description { get; set; }
        public string food_category_id { get; set; }
        public DateTime publication_date { get; set; }





        //344604,branded_food,Tutturosso Green 14.5oz. NSA Italian Diced Tomatoes,,2019-04-01
        //344605,branded_food,Tutturosso Green 14.5oz. Italian Diced Tomatoes,,2019-04-01
        //344606,branded_food,Honeysuckle White Fresh 97% Ground White Turkey,,2019-04-01
        //344607,branded_food,Honeysuckle White 97% Ground White Turkey,,2019-04-01
        //344608,branded_food,Honeysuckle Whtie 85% Ground Turkey,,2019-04-01
        //344609,branded_food,KELLOGG'S POP-TARTS WILD CHERRY 14.1OZ,,2019-04-01
        //344610,branded_food,Kellogg's Pop-Tarts Frosted Strawberry 14.7oz,,2019-04-01
        //344611,branded_food,KELLOGG POP-TARTS FROSTED STRAWBERRY 22OZ,,2019-04-01
    }
}
