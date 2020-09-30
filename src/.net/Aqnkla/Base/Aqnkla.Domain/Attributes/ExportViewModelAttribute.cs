using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Domain.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Delegate)]
    public class ExportViewModelAttribute : Attribute
    {
    }
}
