import { RootComponent } from './components/root-component/root.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'diary',
        loadChildren: () =>
          import('./modules/diary/diary.module').then((m) => m.DiaryModule),
      },
      {
        path: 'recipe',
        loadChildren: () =>
          import('./modules/recipe-manage/recipe-manage.module').then(
            (m) => m.RecipeManageModule
          ),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('./modules/ingredient-manage/ingredient-manage.module').then(
            (m) => m.IngredientsManageModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
    ],
  },
];
export const ApplicationRoutesModule = RouterModule.forChild(routes);
