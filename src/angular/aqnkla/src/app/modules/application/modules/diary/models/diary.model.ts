import { IngredientValueViewModel } from './../../../../../models/api/aqnkla-food';
import { RecipeViewModel } from 'src/app/models/api/aqnkla-food';


export class MealModel {
  id: string;
  dateNumber: number;
  dateTime: Date;
  recipe: RecipeViewModel;
  ingredients: IngredientValueViewModel[];
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
