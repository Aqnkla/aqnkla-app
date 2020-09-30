using System;

namespace Aqnkla.Food.Common.Unit.Weight
{
    public sealed class WeightGramEquivalentAttribute : Attribute
    {
        public double GramEquivalent { get; }
        public WeightGramEquivalentAttribute(double gramEquivalent)
        {
            GramEquivalent = gramEquivalent;
        }

    }
}