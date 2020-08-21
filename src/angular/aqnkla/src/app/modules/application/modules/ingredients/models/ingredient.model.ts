export enum Vitamin {
  vitamin_C,
  vitamin_D,
}

export enum Mineral {
  zink,
  iron,
}

export interface DataValue<T> {
  item: T;
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
