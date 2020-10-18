using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class LabMethodCode
    {
        public int id { get; set; }
        public int lab_method_id { get; set; }
        public string code { get; set; }




        //1000,1000,SPGP_S
        //1001,1001,DGEN_S
        //1003,1003,FAT_AH_S
        //1004,1004,ASHM_S
        //1005,1005,SUGN_S
        //1006,1006,ETOH_VAL_S
        //1007,1007,M100T100_S
        //1008,1008,TDFL_S
        //1009,1009,ICP_S
        //1010,1010,SEICPMS_S
        //1011,1011,BIDE_S
        //1012,1012,B1LC_S
    }
}
