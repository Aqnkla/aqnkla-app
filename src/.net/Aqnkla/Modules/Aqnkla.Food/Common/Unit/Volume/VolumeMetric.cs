using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Food.Common.Unit.Volume
{
    public enum VolumeMetric
    {
        [VolumeLiterEquivalent(1)]
        Liter,

        [VolumeLiterEquivalent(0.001)]
        Militer
    }
}
