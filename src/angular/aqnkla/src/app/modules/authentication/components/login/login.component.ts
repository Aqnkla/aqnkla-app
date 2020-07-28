import { AuthenticationService } from './../../../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sorgo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../styles/authentication.style.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  userPassword: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authenticationService.login(this.userName, this.userPassword);

  }

  register(): void {
    this.router.navigate(['/register']);

  }

  restore(): void {
    this.router.navigate(['/restore']);

  }
}
