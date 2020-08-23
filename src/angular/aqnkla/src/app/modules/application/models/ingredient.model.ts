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
  minerals: DataValue<Mineral>[];
  vitamins: DataValue<Vitamin>[];
}

export interface RecipeModel {
  id: string;
  name: string;
  ingredients: IngredientItemModel[];
}
