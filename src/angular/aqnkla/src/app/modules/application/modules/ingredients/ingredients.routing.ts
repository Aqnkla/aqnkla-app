import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsRootComponent,
    children: [
      { path: 'dashboard', component: IngridientsDashboardComponent },
      { path: 'item-list', component: ItemListComponent },
      { path: 'item-add', component: ItemAddComponent },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-add', component: CategoryAddComponent },
      { path: 'search', component: IngredientsSearchComponent },
    ],
  },
];

export const IngredientsRoutesModule = RouterModule.forChild(routes);
