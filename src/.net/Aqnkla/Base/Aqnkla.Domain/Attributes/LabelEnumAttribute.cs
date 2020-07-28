// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;

namespace Aqnkla.Domain.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Interface | AttributeTargets.Delegate)]
    public sealed class LabelEnumAttribute : Attribute
    {
        public string Label { get; }
        public LabelEnumAttribute(string label)
        {
            Label = label;
        }

    }
}
