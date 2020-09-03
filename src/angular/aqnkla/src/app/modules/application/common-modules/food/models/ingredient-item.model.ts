import { AllerganValue } from './allergan.model';
import { ItemData } from './item-data.model';
import { Mineral } from './mineral.model';
import { Vitamin } from './vitamin.model';

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
  allergans: AllerganValue[];
  isPieceAllowed: boolean;
  pieceAvgWeight: number;
  isVolumeAllowed: boolean;
  avrageDensity: number;
  isVolumeDefault: boolean;
}
