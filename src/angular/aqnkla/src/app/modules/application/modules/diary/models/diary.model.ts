import { RecipeModel } from '../../../common-modules/food/models/recipe/recipe.model';
import { ControllerInfo } from 'src/app/models/controller-into';
import { ItemData } from '../../../common-modules/food/models/common/item-data.model';
import { IngredientItemViewModel } from '../../../common-modules/food/models/api/aqnkla-food';

export class MealControllerInfo implements ControllerInfo {
  readonly controllerName = 'meal';
}

export class MealModel {
  id: string;
  dateNumber: number;
  dateTime: Date;
  recipe: RecipeModel;
  ingredients: ItemData<IngredientItemViewModel>[];
}

export class DiaryDayModel {
  dateNumber: number;
  get date(): Date {
    return this.$date;
  }
  private $date: Date;
  meals: MealModel[];
  constructor(day: Date) {
    this.$date = day;
  }
}
