using Aqnkla.Client.FoodData.Central.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class AgriculturalAcquisition
    {

        [FieldHeader("fdc_id")]
        [DisplayName("")]
        [Description("")]
        public int FdcId { get; set; }


        [FieldHeader("acquisition_date")]
        [DisplayName("")]
        [Description("")]
        public DateTime AcquisitionDate { get; set; }

        [FieldHeader("market_class")]
        [DisplayName("")]
        [Description("")]
        public string MarketClass { get; set; }


        [FieldHeader("treatment")]
        [DisplayName("")]
        [Description("")]
        public string Treatment { get; set; }


        [FieldHeader("state")]
        [DisplayName("")]
        [Description("")]
        public string State { get; set; }


    }
}
