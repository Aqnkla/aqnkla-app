import { ItemData } from './item-data.model';
import { IngredientItemModel } from './ingredient-item.model';
import { ControllerInfo } from 'src/app/models/controller-into';

export class RecipeControllerInfo implements ControllerInfo {
  readonly controllerName = 'recipe';
}

export interface RecipeModel {
  id: string;
  name: string;
  ingredients: ItemData<IngredientItemModel>[];
}
