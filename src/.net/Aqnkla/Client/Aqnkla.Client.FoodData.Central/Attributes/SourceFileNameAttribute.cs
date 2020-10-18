using System;

namespace Aqnkla.Client.FoodData.Central.Attributes
{
    public sealed class SourceFileNameAttribute : Attribute
    {
        public string FilePath { get; }

        public SourceFileNameAttribute(string filePath)
        {
            FilePath = filePath;
        }
    }
}