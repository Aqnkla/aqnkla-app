using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class Nutrient
    {
        public int id { get; set; }
        public string name { get; set; }
        public string unit_name { get; set; }
        public int nutrient_nbr { get; set; }
        public int rank { get; set; }



        //1002,Nitrogen,G,202,500
        //1003,Protein,G,203,600
        //1004,Total lipid (fat),G,204,800
        //1005,Carbohydrate, by difference,G,205,1110
        //1007,Ash,G,207,1000
        //1008,Energy,KCAL,208,300
        //1009,Starch,G,209,2200
        //1010,Sucrose,G,210,1600
        //1011,Glucose (dextrose),G,211,1700
        //1012,Fructose,G,212,1800
        //1013,Lactose,G,213,1900
        //1014,Maltose,G,214,2000
        //1018,Alcohol, ethyl,G,221,18200
        //1024,Specific Gravity,SP_GR,227,999999
        //1026,Acetic acid,MG,230,2900
        //1032,Citric acid,MG,236,3500
    }
}
