namespace Aqnkla.Food.Common.Unit.Weight
{
    public enum WeightMetric
    {
        [WeightGramEquivalent(1000)]
        Kilogram,
        [WeightGramEquivalent(1)]
        Gram,
        [WeightGramEquivalent(0.001)]
        MilliGram,
        [WeightGramEquivalent(0.000001)]
        MicroGram
    }
}
