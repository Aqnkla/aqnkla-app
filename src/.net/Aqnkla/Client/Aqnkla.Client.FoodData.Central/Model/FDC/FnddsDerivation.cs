using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FnddsDerivation
    {
        [FieldHeader("SR 28 derivation code")]
        public string Sr28DerivationCode { get; set; }


        [FieldHeader("SR 28 derivation description")]
        public string Sr28DerivationDescription { get; set; }



        //A,Analytical data
        //AR,Analytical data; derived by linear regression
        //BD,Based on same food; Drained solids from solids and liquids or vice versa (canned fruits and vegetables)
        //BFCN,Based on another form of the food or similar food; Concentration adjustment; Carbohydrate; Retention factors not used
        //BFNN,Based on another form of the food or similar food; Concentration adjustment; Non-fat solids; Retention factors not used
        //BFSN,Based on another form of the food or similar food; Concentration adjustment; Solids; Retention factors not used
        //BFYN,Based on another form of the food or similar food; Concentration adjustment; Yield; Retention factors not used
        //BFZN,Based on another form of the food or similar food; Concentration adjustment; No adjustment; Retention factors not used
        //BNA,Based on another form of the same food or similar food: constituents normalized to total; vitamin A
        //CAZN,Calculated from different food; From average values for food category; No adjustment; Retention factors not used
        //DA,Concentration adjustment using factor; derived from analytical data
        //FLM,Estimated formulation based on ingredient list; Linear program used to estimate ingredients; Manuf. Calc. data/100
        //LC,Label claim (back calculated from label by NDL staff; Calculated from label claim/serving (g or %RDI)
        //MA,Manufacturer supplied(industry or trade association); Analytical data, incomplete documentation
        //ML,Manufacturer supplied; Value upon which manufacturer based label claim for fortified/enriched nutrient
    }
}
