import { ControllerInfo } from 'src/app/models/controller-into';
import { IngredientItemModel } from '../ingredient/ingredient-item.model';
import { ItemData } from '../common/item-data.model';

export class RecipeControllerInfo implements ControllerInfo {
  readonly controllerName = 'recipe';
}

export enum StepType {
  single,
  merge,
}

export interface StepGroup {
  id: string;
  name: string;
  description: string;
}

export interface StepItem {
  id: string;
  groupId: string;
  type: StepType;
  mergedGroups: string[];
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
