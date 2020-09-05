import { ControllerInfo } from './../../../../../../models/controller-into';

export class IngredientCategoryControllerInfo implements ControllerInfo {
  readonly controllerName = 'ingredient-category';
}


export interface IngredientCategoryModel {
  id: string;
  name: string;
  description: string;
  parentCategoryId: string;
}
