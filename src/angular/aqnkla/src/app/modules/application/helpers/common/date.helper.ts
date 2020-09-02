export class DateHelper {
  static getDateString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  static getDate(dateString: string): Date {
    const day = new Date(dateString);
    return day;
  }
  static addDays(date: Date, days: number): Date {
    const value = new Date(date);
    value.setDate(value.getDate() + days);
    return value;
  }

  static getDateNumber(date: Date): number {
    const year = date.getFullYear() * 10000;
    const month = (date.getMonth() + 1) * 100;
    const day = date.getDate();
    return year + month + day;
  }

  static getDateFromNumber(date: number): Date {
    throw new Error('not implemented');
  }
}
