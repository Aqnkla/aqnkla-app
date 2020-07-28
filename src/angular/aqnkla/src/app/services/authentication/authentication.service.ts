import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private $isAuthenticated = false;
  private $authenticateSubject = new Subject<boolean>();

  get authenticationChange(): Observable<boolean> {
    return this.$authenticateSubject.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.$isAuthenticated;
  }

  login(userName: string, password: string): boolean {
    this.$isAuthenticated = true;
    this.$authenticateSubject.next(this.$isAuthenticated);
    return this.$isAuthenticated;
  }

  register(userName: string, password: string, rePassword: string): boolean {
    return true;
  }

  restorePassword(userEmail: string): void {

  }


  logout(): void {
    this.$isAuthenticated = false;
    this.$authenticateSubject.next(this.$isAuthenticated);
  }
}
