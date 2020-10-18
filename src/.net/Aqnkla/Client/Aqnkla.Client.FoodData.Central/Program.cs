using Aqnkla.Client.FoodData.Central.Service;
using System;

namespace Aqnkla.Client.FoodData.Central
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = new FileReader();
            service.ReadFoodData(@"d:\temp\FoodData_Central\");
        }
    }
}
