using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;

namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("acquisition_sample.csv")]
    [Description("Acquisitions may be blended with other acquisitions to create a sample food, and an acquisition can be used to created more than one sample food.This file stores which acquisitions and sample foods are related to each other.")]
    public class AcquisitionSample
    {
        [FieldHeader("fdc_id_of_sample_food")]
        [DisplayName("Fdc Id Of Sample Food")]
        [Description(" ID of the sample food that uses the acquisitioned food")]
        public int FdcIdOfSampleFood { get; set; }

        [FieldHeader("fdc_id_of_acquisition_food")]
        [DisplayName("Fdc Id Of Acquisition Food")]
        [Description("ID of the acquisitioned food used in the sample food")]
        public int FdcIdOfAcquisitionFood { get; set; }
    }
}
