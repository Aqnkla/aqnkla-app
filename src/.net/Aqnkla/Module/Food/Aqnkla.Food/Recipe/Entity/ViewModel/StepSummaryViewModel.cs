using Aqnkla.Domain.Attributes;
using System.Collections.Generic;

namespace Aqnkla.Food.Recipe.Entity.ViewModel
{
    [ExportViewModel]
    public class StepSummaryViewModel
    {
        public List<StepItemViewModel> Steps { get; set; }
        public List<StepGroupViewModel> Groups { get; set; }
    }

}
