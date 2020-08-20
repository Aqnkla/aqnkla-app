export interface IngredientCategoryModel {
  id: string;
  name: string;
  description: string;
}

export interface IngredientModel {
  id: string;
  categoryId: string;
  name: string;
  description: string;
}
