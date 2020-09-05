export enum Allergen {
  gluten,
  lactose
}

export enum AllergenImportance {
  none,
  production_dependent,
  full,
}

export class AllergenValue {
  allergen: Allergen;
  allergenImportance: AllergenImportance;
}


