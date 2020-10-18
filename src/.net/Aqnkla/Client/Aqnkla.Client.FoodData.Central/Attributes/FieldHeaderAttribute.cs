using System;

namespace Aqnkla.Client.FoodData.Central.Attributes
{
    public sealed class FieldHeaderAttribute : Attribute
    {
        public string HeaderName { get; }
        public FieldHeaderAttribute(string headerName)
        {
            HeaderName = headerName;
        }
    }
}