using System;

namespace Aqnkla.Client.FoodData.Central.Model
{
    public sealed class FoodFilePathAttribute : Attribute
    {
        public string FilePath { get; }

        public FoodFilePathAttribute(string filePath)
        {
            FilePath = filePath;
        }
    }
}