using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using System.Collections.Generic;

namespace Aqnkla.Food.Recipe.Entity.ViewModel
{
    [ExportViewModel]
    public class StepItemViewModel
    {
        public string Id { get; set; }
        public string GroupId { get; set; }
        public StepType Type { get; set; }
        public List<string> MergedGroups { get; set; }
        public int SortOrder { get; set; }
        public string PreviousStepId { get; set; }
        public List<IngredientValueViewModel> AddedIngredients { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

}
