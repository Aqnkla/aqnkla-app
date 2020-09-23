import { AllergenValue } from './parameters/allergen.model';
import { ControllerInfo } from 'src/app/models/controller-into';
import { ItemData } from '../common/item-data.model';
import { Mineral } from './parameters/mineral.model';
import { Vitamin } from './parameters/vitamin.model';

export class IngredientItemControllerInfo implements ControllerInfo {
  readonly controllerName = 'food/ingredient/item';
}

export interface IngredientItemModel {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  minerals: ItemData<Mineral>[];
  vitamins: ItemData<Vitamin>[];
  allergens: AllergenValue[];
  isPieceAllowed: boolean;
  pieceAvgWeight: number;
  isVolumeAllowed: boolean;
  averageDensity: number;
  isVolumeDefault: boolean;
}
