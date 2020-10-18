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

        public int fdc_id { get; set; }

        public DateTime acquisition_date { get; set; }
        public string market_class { get; set; }

        public string treatment { get; set; }

        public string state { get; set; }


    }
}
