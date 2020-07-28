import { AuthenticationService } from './../../../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sorgo-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./../../styles/authentication.style.scss']
})
export class RestoreComponent implements OnInit {
  isProcessed = false;
  isSuccess = true;
  userEmail: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }


  login(): void {
    this.router.navigate(['/login']);

  }

  restore(): void {
    this.authenticationService.restorePassword(this.userEmail);
    this.isProcessed = true;
  }

  reload(): void {
    this.router.navigate(['/restore']);
  }
}
