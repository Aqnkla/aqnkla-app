export interface Unit {
  name: string;
  label: string;
  value: number;
}

export class DataHelper {
  static getUnits(): Unit[] {
    const units: Unit[] = [
      { name: 'g', label: 'gram', value: 1 },
      { name: 'mg', label: 'milligram', value: 0.001 },
      { name: 'μg', label: 'microgram', value: 0.000001 },
      { name: 'ng', label: 'nanogram', value: 1e-9 },
    ];
    return units;
  }
}
