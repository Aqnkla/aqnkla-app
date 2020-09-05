import { AccountRoutesModule } from './account.routing';
import { AccountRootComponent } from './components/account-root/account-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardComponent } from './components/account-dashboard/account-dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [AccountRootComponent,  AccountDashboardComponent, SettingsComponent, LogoutComponent],
  imports: [
    CommonModule,
    AccountRoutesModule
  ],
  exports: [
    AccountRootComponent
  ]
})
export class AccountModule { }
