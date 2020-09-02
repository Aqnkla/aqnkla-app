import { AuthenticationService } from './services/authentication/authentication.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { StartComponent } from './components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AqnklaRoutesModule } from './aqn.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AqnklaRoutesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule

    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [StartComponent],
  declarations: [StartComponent],
  providers: [AuthenticationService],
})
export class AqnklaModule {}
