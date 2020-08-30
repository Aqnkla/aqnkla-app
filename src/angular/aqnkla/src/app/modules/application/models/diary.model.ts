import { RecipeModel, ItemData, IngredientItemModel } from './ingredient.model';

export class MealModel {
  dateTime: Date;
  recipe: RecipeModel;
  ingredients: ItemData<IngredientItemModel>[];
}

export class DiaryDayModel {
  get date(): Date {
    return this.$date;
  }
  private $date: Date;
  meals: MealModel[];
  constructor(day: Date) {
    this.$date = day;
  }
}
