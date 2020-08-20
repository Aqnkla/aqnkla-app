export interface IngredientCategoryModel {
  id: string;
  name: string;
  description: string;
}

export interface IngredientItemModel {
  id: string;
  categoryId: string;
  name: string;
  description: string;
}
