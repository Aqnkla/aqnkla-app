using Aqnkla.Domain.Attributes;
using Aqnkla.Food.Ingredient.Entity.Item.VievModel;
using System.Collections.Generic;

namespace Aqnkla.Food.Recipe.Entity.ViewModel
{

    [ExportViewModel]
    public class RecipeViewModel
    {

        public string Id { get; set; }
        public string Name { get; set; }
        public List<IngredientValueViewModel> Ingredients { get; set; }
        public StepSummaryViewModel PrepareSteps { get; set; }
    }

}
