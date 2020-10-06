export enum AllergenImportance {
  None,
  ProductionDependent,
  Full,}

export enum AllergenType {
  Gluten,
  Lactose,}

export enum AminoAcidType {
  Lysine,}

export enum CarbohydrateType {}

export enum CholesterolType {
  LDL,
  HDL,}

export enum FatType {
  Saturated,
  Polyunsaturated,
  Monounsaturated,
  Trans,}

export enum MineralType {
  Iron,
  Potasium,}

export enum QuantityItemSize {
  Small,
  Medium,
  Large,}

export enum StepType {
  single,
  merge,}

export enum UnitType {
  Weight,
  Volume,
  Quantity,}

export enum VitaminType {
  VitaminC,}

export enum VolumeKitchen {
  Spoon,
  Glass,}

export enum VolumeMetric {
  Liter,
  MilliLiter,}

export enum WeightMetric {
  Kilogram,
  Gram,
  MilliGram,
  MicroGram,}

export interface AllergenViewModel {
  allergen: AllergenType;
  allergenLabel: string;
  importance: AllergenImportance;
  importanceLabel: string;
}

export interface AminoAcidViewModel {
  aminoAcid: AminoAcidType;
  aminoAcidLabel: string;
  weightGrams: number;
}

export interface CarbohydrateViewModel {
  carbohydrate: CarbohydrateType;
  carbohydrateLabel: string;
  weightGrams: number;
}

export interface CholesterolViewModel {
  cholesterol: CholesterolType;
  cholesterolLabel: string;
  weightGrams: number;
}

export interface FatViewModel {
  fat: FatType;
  fatLabel: string;
  weightGrams: number;
}

export interface IngredientCategoryViewModel {
  id: string;
  name: string;
  description: string;
  parentCategoryId: string;
}

export interface IngredientItemViewModel {
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
  isQuantityAllowed: boolean;
  quantityAvgWeights: QuantityItemSizeViewModel[];
  isVolumeAllowed: boolean;
  volumeAverageDensity: number;
  isVolumeDefault: boolean;
}

export interface IngredientValueViewModel {
  id: string;
  weightGrams: number;
}

export interface MineralViewModel {
  mineral: MineralType;
  mineralLabel: string;
  weightGrams: number;
}

export interface QuantityItemSizeViewModel {
  quantity: QuantityItemSize;
  quantityLabel: string;
  weightGrams: number;
}

export interface RecipeViewModel {
  id: string;
  name: string;
  ingredients: IngredientValueViewModel[];
  prepareSteps: StepSummaryViewModel;
}

export interface StepGroupViewModel {
  id: string;
  name: string;
  description: string;
}

export interface StepItemViewModel {
  id: string;
  groupId: string;
  type: StepType;
  mergedGroups: string[];
  sortOrder: number;
  previousStepId: string;
  addedIngredients: IngredientValueViewModel[];
  name: string;
  description: string;
}

export interface StepSummaryViewModel {
  steps: StepItemViewModel[];
  groups: StepGroupViewModel[];
}

export interface VitaminViewModel {
  vitamin: VitaminType;
  vitaminLabel: string;
  weightGrams: number;
}


