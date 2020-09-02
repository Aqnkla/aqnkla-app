import { RecipeModel, ItemData, IngredientItemModel } from './ingredient.model';

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
