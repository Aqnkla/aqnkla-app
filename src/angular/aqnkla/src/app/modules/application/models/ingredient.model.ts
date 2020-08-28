export enum Vitamin {
  vitamin_C,
  vitamin_D,
}

export enum Mineral {
  zink,
  iron,
  molibden,
  clorium,
  phtotasium,
}

export enum Allergan {
  gluten,
  laktose,
}

export enum AllerganImportance {
  none,
  production_dependent,
  full,
}

export class AllerganValue {
  allergan: Allergan;
  allerganImportance: AllerganImportance;
}

export class DataValue {
  /// gram relative ratio 1mg=0.001,1gr=1, 1kg=1000
  dataFactor: number;
  dataValueRelative: number;
  label: string;
}

export interface ItemData<T> {
  item: T;
  weight: DataValue;
}

export interface IngredientCategoryModel {
  id: string;
  name: string;
  description: string;
  parentCategoryId: string;
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
  allergans: AllerganValue[];
  isPieceAllowed: boolean;
  pieceAvgWeight: number;
  isVolumeAllowed: boolean;
  avrageDensity: number;
  isVolumeDefault: boolean;
}

export interface RecipeModel {
  id: string;
  name: string;
  ingredients: ItemData<IngredientItemModel>[];
}
