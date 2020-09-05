export interface Unit {
  name: string;
  label: string;
  value: number;
}

export class DataHelper {
  static getWeightUnitsGram(minGramWeight: number): Unit[] {
    const units: Unit[] = [
      { name: 'kg', label: 'kilogram', value: 1000 },
      { name: 'g', label: 'gram', value: 1 },
      { name: 'mg', label: 'milligram', value: 0.001 },
      { name: 'μg', label: 'microgram', value: 0.000001 },
      { name: 'ng', label: 'nanogram', value: 1e-9 },
    ];
    return units.filter((b) => b.value >= minGramWeight);
  }

  static getVolumeUnitsLitre(): Unit[] {
    const units: Unit[] = [
      { name: 'l', label: 'litre', value: 1 },
      { name: 'ml', label: 'milliliter', value: 0.001 },
    ];
    return units;
  }
}
