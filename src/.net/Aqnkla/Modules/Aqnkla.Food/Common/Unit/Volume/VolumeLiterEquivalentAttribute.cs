using System;

namespace Aqnkla.Food.Common.Unit.Volume
{
    public sealed class VolumeLiterEquivalentAttribute : Attribute
    {
        public double LiterEquivalent { get; }

        public VolumeLiterEquivalentAttribute(double literEquivalent)
        {
            LiterEquivalent = literEquivalent;
        }
    }
}