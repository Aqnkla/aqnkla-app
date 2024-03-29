import { RootComponent } from './components/root-component/root.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      { path: 'diary', loadChildren: () => import('./modules/diary/diary.module').then(m => m.DiaryModule) },
      { path: 'recipt', loadChildren: () => import('./modules/recipt/recipt.module').then(m => m.ReciptModule) },
      { path: 'ingredients', loadChildren: () => import('./modules/ingredients/ingredients.module').then(m => m.IngredientsModule) },
      { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) }
    ]
  }
];
export const ApplicationRoutesModule = RouterModule.forChild(routes);
