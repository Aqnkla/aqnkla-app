export class ArrayHelper {
  static arrayRemove<T>(arr: T[], value: T): T[] {
    return arr.filter((ele) => ele !== value);
  }
}
