import { RecipeModel } from '../../../common-modules/food/models/recipe.model';
import { ItemData } from '../../../common-modules/food/models/item-data.model';
import { IngredientItemModel } from '../../../common-modules/food/models/ingredient-item.model';
import { ControllerInfo } from 'src/app/models/controller-into';

export class MealControllerInfo implements ControllerInfo {
  readonly controllerName = 'meal';
}

export class MealModel {
  id: string;
  dateNumber: number;
  dateTime: Date;
  recipe: RecipeModel;
  ingredients: ItemData<IngredientItemModel>[];
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
