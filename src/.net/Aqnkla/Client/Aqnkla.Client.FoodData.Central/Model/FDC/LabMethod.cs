using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class LabMethod
    {
        public int id { get; set; }
        public string description { get; set; }
        public string technique { get; set; }




        //1000,NIST Handbook 133,Gravimetric
        //1001,AOAC 968.06 + 992.15,Combustion
        //1002,AOAC 960.39 39.1,Extraction
        //1003,AOAC 922.06,Acid hydrolysis
        //1004,AOAC 923.03,Gravimetric
        //1005,doi.10.1021/jf60175a006,GC
        //1006,doi.org/10.1093/jat/4.1.43,GC
        //1007,AOAC 934.06 mod,Vacuum oven
        //1008,AOAC 991.43,Enzymatic-gravimetric
        //1009,AOAC 985.01 + 984.27,ICP
        //1010,AOAC 2011.19,ICP-MS
        //1011,AOAC 942.23 + 953.17 + 957.17,Fluorometric
        //1012,In-house HPLC thiamin,HPLC
        //1013,AOAC 940.33,Microbiological
        //1014,AOAC 944.13 + 960.46 + 985.34,Microbiological
        //1015,AOAC 945.74 + 960.46,Microbiological
        //1016,AOAC 961.15,Microbiological
        //1017,AOAC 992.05,Microbiological
        //1018,AOAC 991.20,Kjeldahl
    }
}
