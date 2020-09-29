import { AllergenValue } from './parameters/allergen.model';
import { ControllerInfo } from 'src/app/models/controller-into';
import { ItemData } from '../common/item-data.model';
import { Mineral } from './parameters/mineral.model';
import { Vitamin } from './parameters/vitamin.model';

export class IngredientItemControllerInfo implements ControllerInfo {
  readonly controllerName = 'food/ingredient/item';
}

export interface CholesterolViewModel {}
export interface CarbohydrateViewModel {}
export interface AminoAcidViewModel {}
export interface FatViewModel {}
export interface AllergenViewModel {}
export interface MineralViewModel {}
export interface VitaminViewModel {}
export interface QuantityItemSizeViewModel {}

export interface IngredientItemModel {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  fatTotal: number;
  carbsTotal: number;
  fiber: number;
  cholesterol: CholesterolViewModel[];
  carbohydrates: CarbohydrateViewModel[];
  aminoAcids: AminoAcidViewModel[];
  fats: FatViewModel[];
  minerals: MineralViewModel[];
  vitamins: VitaminViewModel[];
  allergens: AllergenViewModel[];
  quantityAvgWeights: QuantityItemSizeViewModel[];
  isQuantityAllowed: boolean;
  isVolumeAllowed: boolean;
  volumeAverageDensity: number;
  isVolumeDefault: boolean;
}
