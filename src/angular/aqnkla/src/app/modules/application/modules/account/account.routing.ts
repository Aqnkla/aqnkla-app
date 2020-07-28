import { LogoutComponent } from './components/logout/logout.component';
import { AccountRootComponent } from './components/account-root/account-root.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountDashboardComponent } from './components/account-dashboard/account-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AccountRootComponent, children:
      [
        { path: 'dashboard', component: AccountDashboardComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'logout', component: LogoutComponent }

      ]
  }
];

export const AccountRoutesModule = RouterModule.forChild(routes);
