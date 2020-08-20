import { PageNotFoundComponent } from './modules/application/components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { RestoreComponent } from './modules/authentication/components/restore/restore.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restore', component: RestoreComponent },
  { path: '**', component: PageNotFoundComponent }
];
export const AqnklaRoutesModule = RouterModule.forRoot(routes);
