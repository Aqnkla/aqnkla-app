using Aqnkla.Client.FoodData.Central.Attributes;
using System.ComponentModel;


namespace Aqnkla.Client.FoodData.Central.Model.FDC
{
    [SourceFileName("")]
    [Description("")]
    public class FoodPortion
    {
        public int id { get; set; }
        public int fdc_id { get; set; }
        public int seq_num { get; set; }
        public int amount { get; set; }
        public int measure_unit_id { get; set; }
        public string portion_description { get; set; }
        public string modifier { get; set; }
        public int gram_weight { get; set; }
        public int data_points { get; set; }
        public string footnote { get; set; }
        public int min_year_acquired { get; set; }




        //193827,749289,,1,1050,,,4.6,1,,
        //198266,781082,1,,9999,1 cup,10205,246,,,
        //203276,781082,3,,9999,1 fl oz,30000,30.8,,,
        //225855,781082,2,,9999,Quantity not specified,90000,0,,,
        //198267,781083,1,,9999,1 cup,10205,244,,,
        //203277,781083,2,,9999,1 fl oz,30000,30.5,,,
        //219058,781083,4,,9999,Guideline amount per fl oz of beverage,63480,2.5,,,
        //219411,781083,5,,9999,Guideline amount per cup of hot cereal,63546,61,,,
        //219444,781083,6,,9999,Guideline amount per cup of cold cereal,63547,122,,,
        //221998,781083,3,,9999,1 individual school container,64294,244,,,
        //225856,781083,7,,9999,Quantity not specified,90000,244,,,
        //198268,781084,1,,9999,1 cup,10205,244,,,
        //203278,781084,2,,9999,1 fl oz,30000,30.5,,,
        //219059,781084,4,,9999,Guideline amount per fl oz of beverage,63480,2.5,,,
        //219412,781084,5,,9999,Guideline amount per cup of hot cereal,63546,61,,,
    }
}
