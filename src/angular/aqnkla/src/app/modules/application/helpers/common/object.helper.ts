export class ObjectHelper {
  static getEnumValues<T>(enumType: any): T[] {
    const enums: T[] = [];
    for (const key in enumType) {
      if (Object.prototype.hasOwnProperty.call(enumType, key)) {
        const element = enumType[key];
        const isValueProperty = parseInt(element, 10) >= 0;
        if (isValueProperty) {
          enums.push(enumType[element]);
        }
      }
    }
    return enums;
  }
}
