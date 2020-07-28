import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RestoreComponent } from './components/restore/restore.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RestoreComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    RestoreComponent
  ]
})
export class AuthenticationModule { }
