import { ItemData } from './item-data.model';
import { IngredientItemModel } from './ingredient-item.model';

export interface RecipeModel {
  id: string;
  name: string;
  ingredients: ItemData<IngredientItemModel>[];
}
