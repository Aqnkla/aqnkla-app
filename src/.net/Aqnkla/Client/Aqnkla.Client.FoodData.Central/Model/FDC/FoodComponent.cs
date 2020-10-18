using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodComponent
    {
        public int id { get; set; }
        public int fdc_id { get; set; }
        public string name { get; set; }
        public string pct_weight { get; set; }
        public string is_refuse { get; set; }
        public double gram_weight { get; set; }
        public double data_points { get; set; }
        public int min_year_acquired { get; set; }




        //57035,330966,Handling loss,,N,6.7,1,
        //57036,330966,Skin and separable fat,,Y,16,1,
        //57037,330966,Bone and cartilage,,Y,51.5,1,
        //57038,330966,Edible portion,,N,87.6,1,
        //57039,330966,Total gram weight,,N,162,1,
        //57040,330966,Separable Lean,,N,87.6,1,
        //57041,330967,Edible portion,,N,84.6,1,
        //57042,330967,Handling loss,,N,8.2,1,
        //57043,330967,Skin and separable fat,,Y,16.3,1,
        //57044,330967,Bone and cartilage,,Y,58.3,1,
    }
}
