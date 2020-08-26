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

export interface DataValue<T> {
  item: T;
  quantityRatio: number;
  quantityLabel: string;
  quantity: number;
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
  minerals: DataValue<Mineral>[];
  vitamins: DataValue<Vitamin>[];
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
  ingredients: DataValue<IngredientItemModel>[];
}
