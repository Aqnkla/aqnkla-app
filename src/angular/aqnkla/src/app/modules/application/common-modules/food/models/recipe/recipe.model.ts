import { ControllerInfo } from 'src/app/models/controller-into';
import { IngredientItemModel } from '../ingredient/ingredient-item.model';
import { ItemData } from '../common/item-data.model';

export class RecipeControllerInfo implements ControllerInfo {
  readonly controllerName = 'recipe';
}

export interface StepGroup {
  groupNumber: number;
  name: string;
  description: string;
}

export interface StepItem {
  id: string;
  groupNumber: number;
  sortOrder: number;
  previousStepId: string;
  addedIngredients: ItemData<IngredientItemModel>[];
  name: string;
  description: string;
}

export interface StepSummary {
  steps: StepItem[];
  groups: StepGroup[];
}

export interface RecipeModel {
  id: string;
  name: string;
  ingredients: ItemData<IngredientItemModel>[];
  prepareSteps: StepSummary;
}
