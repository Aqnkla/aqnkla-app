import { RecipeDashboardComponent } from './components/recipe-dashboard/recipe-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeRootComponent } from './components/recipe-root/recipe-root.component';
import { ViewType } from 'src/app/models/common.model';

const routes: Routes = [
  {
    path: '',
    component: RecipeRootComponent,
    children: [
      { path: '', component: RecipeListComponent },
      { path: 'dashboard', component: RecipeDashboardComponent },
      { path: 'list', component: RecipeListComponent },
      { path: 'search', component: RecipeSearchComponent },
      {
        path: 'add',
        component: RecipeDetailComponent,
        data: {
          viewType: ViewType.add,
        },
      },
      {
        path: 'edit/:id',
        component: RecipeDetailComponent,
        data: {
          viewType: ViewType.edit,
        },
      },
      {
        path: 'detail/:id',
        component: RecipeDetailComponent,
        data: {
          viewType: ViewType.detail,
        },
      },
    ],
  },
];

export const RecipeRoutesModule = RouterModule.forChild(routes);
