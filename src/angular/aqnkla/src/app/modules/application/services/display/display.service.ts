import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private $darkModeSubject = new Subject<boolean>();
  private $menuSizeSubject = new Subject<number>();
  private $isDarkMode = false;
  private $menuSize: number;

  /**
   * emmit change of current mode
   * @returns true = (is dark)
   */
  get darkModeChange(): Observable<boolean> {
    return this.$darkModeSubject.asObservable();
  }

  /**
   *  emmit change of side menu size
   *  @returns size of menu
   */
  get menuSizeChange(): Observable<number> {
    return this.$menuSizeSubject.asObservable();
  }

  /**
   * current mode
   * @returns true = (is dark)
   */
  get isDarkMode(): boolean {
    return this.$isDarkMode;
  }

  /**
   * current menu size
   * @returns size of menu
   */
  get menuSzie(): number {
    return this.$menuSize;
  }

  constructor() { }

  /**
   * switch mode from dark to normal
   * @returns current mode, (is dark)
   */
  switchDarkMode(): boolean {
    this.$isDarkMode = !this.$isDarkMode;
    this.$darkModeSubject.next(this.$isDarkMode);
    return this.$isDarkMode;
  }

  /**
   * menu size chcnge
   * @param size of changed menu
   */
  changeMenuSize(size: number): void {
    this.$menuSize = size;
    this.$menuSizeSubject.next(this.$menuSize);

  }
}
