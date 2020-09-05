export enum Allergan {
  gluten,
  laktose
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


