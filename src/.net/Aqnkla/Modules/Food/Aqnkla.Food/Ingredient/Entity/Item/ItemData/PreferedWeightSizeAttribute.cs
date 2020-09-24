﻿using Aqnkla.Food.Common.Unit.Weight;
using System;

namespace Aqnkla.Food.Ingredient.Entity.ItemData
{
    public sealed class PreferedWeightSizeAttribute : Attribute
    {
        public WeightMetric Weight { get; }
        public PreferedWeightSizeAttribute(WeightMetric weight)
        {
            Weight = weight;
        }

    }
}