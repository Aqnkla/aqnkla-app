using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodNutrientDerivation
    {

        public int id { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public int source_id { get; set; }


        //        1,A,Analytical,1






        //2,AI,Analytical data; from the literature or  government;  incomplete documentation,10
        //3,AR,Analytical data; derived by linear regression,1
        //4,AS,Summed,1
        //5,BD,Based on same food; Drained solids from solids and liquids or vice versa (canned fruits and vegetables),2
        //6,BFAN,Based on another form of the food or similar food; Concentration adjustment; Ash; Retention factors not used,2
        //8,BFCN,Based on another form of the food or similar food; Concentration adjustment; Carbohydrate; Retention factors not used,2
        //10,BFFN,Based on another form of the food or similar food; Concentration adjustment; Fat; Retention factors not used,2
        //11,BFFY,Based on another form of the food or similar food; Concentration adjustment; Fat; Retention factors used,2
        //12,BFNN,Based on another form of the food or similar food; Concentration adjustment; Non-fat solids; Retention factors not used,2
        //13,BFNY,Based on another form of the food or similar food; Concentration adjustment; Non-fat solids; Retentions factors used,2
        //14,BFPN,Based on another form of the food or similar food; Concentration adjustment; Protein; Retention factors not used,2
        //15,BFPY,Based on another form of the food or similar food; Concentration adjustment; Protein; Retention factors used,2
        //16,BFSN,Based on another form of the food or similar food; Concentration adjustment; Solids; Retention factors not used,2
    }
}
