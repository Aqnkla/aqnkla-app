import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsRootComponent,
    children: [
      { path: 'dashboard', component: IngridientsDashboardComponent },
      { path: 'item-list', component: ItemListComponent },
      { path: 'item-add', component: ItemDetailComponent },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-add', component: CategoryDetailComponent },
      { path: 'category-edit', component: CategoryDetailComponent },
      { path: 'category-detail', component: CategoryDetailComponent },
      { path: 'search', component: IngredientsSearchComponent },
    ],
  },
];

export const IngredientsRoutesModule = RouterModule.forChild(routes);
