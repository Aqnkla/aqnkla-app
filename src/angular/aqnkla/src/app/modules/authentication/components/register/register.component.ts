import { AuthenticationService } from './../../../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'aqn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../../styles/authentication.style.scss']
})
export class RegisterComponent implements OnInit {
  isProcessed = false;
  isSuccess = true;
  userName: string;
  userPassword: string;
  userRePassword: string;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  rePasswordFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }


  login(): void {
    this.router.navigate(['/login']);

  }

  register(): void {
    this.authenticationService.register(this.userName, this.userPassword, this.userRePassword);
    this.isProcessed = true;
  }

  reload(): void {
    this.router.navigate(['/register']);
  }
}
