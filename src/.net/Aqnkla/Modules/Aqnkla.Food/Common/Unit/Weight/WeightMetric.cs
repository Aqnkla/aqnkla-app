using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Common.Unit.Weight
{
    public enum WeightMetric
    {
        [WeightGramEquivalent(1000)]
        Kilgram,
        [WeightGramEquivalent(1)]
        Gram,
        [WeightGramEquivalent(0.001)]
        MiliGram,
        [WeightGramEquivalent(0.000001)]
        MikroGram
    }
}
