using Aqnkla.Domain.Attributes;

namespace Aqnkla.Food.Recipe.Entity.ViewModel
{
    [ExportViewModel]
    public class StepGroupViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

}
