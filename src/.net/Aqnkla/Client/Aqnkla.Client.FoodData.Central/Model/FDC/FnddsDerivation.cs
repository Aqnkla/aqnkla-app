using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("fndds_derivation.csv")]
    [Description("")]
    public class FnddsDerivation
    {
        [FieldHeader("SR 28 derivation code")]
        [DisplayName("")]
        [Description("")]
        public string Sr28DerivationCode { get; set; }


        [FieldHeader("SR 28 derivation description")]
        [DisplayName("")]
        [Description("")]
        public string Sr28DerivationDescription { get; set; }
    }
}
