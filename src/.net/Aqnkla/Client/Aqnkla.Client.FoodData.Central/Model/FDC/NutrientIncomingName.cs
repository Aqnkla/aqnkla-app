using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;



namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class NutrientIncomingName
    {
        public int id { get; set; }
        public string name { get; set; }
        public int nutrient_id { get; set; }



        //1000,NITROGEN-DUMAS METHO,1002
        //1001,Nitrogen,1002
        //1002,NITROGEN-DUMAS METHOD,1002
        //1003,Nitrogen - Kjeldahl,1002
        //1004,Protein,1003
        //1005,Proteins,1003
        //1006,PROTEIN (N X 5.70) D,1003
        //1007,PROTEIN (N X 6.38) D,1003
        //1008,PROTEIN(N X 6.25)DUM,1003
        //1009,Protein - Kjeldahl,1003
        //1010,PROTEIN avg,1003
        //1011,PROTEIN(N X 6.25)DUMAS,1003
        //1012,PROTEIN (N X 5.70) DUMAS,1003
        //1013,PROTEIN (N X 6.38) DUMAS,1003
        //1014,Protein - Combustion (N X 6.25),1003
        //1015,PROTEIN (N X 5.46) DUMAS,1003
        //1016,Protein (N x 6.25) Dumas Method,1003
        //1017,Protein (N x 6.38) Dumas Method,1003
        //1018,Protein (N x 5.30) Dumas Method,1003
        //1019,FAT,1004
        //1020,Fat (a),1004
    }
}
