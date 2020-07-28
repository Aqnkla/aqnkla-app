import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientsAddComponent } from './components/ingredients-add/ingredients-add.component';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsRootComponent,
    children: [
      { path: 'dashboard', component: IngridientsDashboardComponent },
      { path: 'list', component: IngredientsListComponent },
      { path: 'add', component: IngredientsAddComponent },
      { path: 'search', component: IngredientsSearchComponent }
    ]
  }
];

export const IngredientsRoutesModule = RouterModule.forChild(routes);
