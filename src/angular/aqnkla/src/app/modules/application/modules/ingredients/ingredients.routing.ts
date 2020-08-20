import { IngridientsDashboardComponent } from './components/dashboard/ingridients-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsSearchComponent } from './components/search/ingredients-search.component';
import { IngredientsRootComponent } from './components/root/ingredients-root.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { ViewType } from './../../../../models/common.model';
const routes: Routes = [
  {
    path: '',
    component: IngredientsRootComponent,
    children: [
      {
        path: 'dashboard',
        component: IngridientsDashboardComponent,
      },
      { path: 'item-list', component: ItemListComponent },
      {
        path: 'item-add',
        component: ItemDetailComponent,
        data: {
          viewType: ViewType.add,
        },
      },
      {
        path: 'item--edit/:id',
        component: ItemDetailComponent,
        data: {
          viewType: ViewType.edit,
        },
      },
      {
        path: 'item--detail/:id',
        component: ItemDetailComponent,
        data: {
          viewType: ViewType.detail,
        },
      },
      { path: 'category-list', component: CategoryListComponent },
      {
        path: 'category-add',
        component: CategoryDetailComponent,
        data: {
          viewType: ViewType.add,
        },
      },
      {
        path: 'category-edit/:id',
        component: CategoryDetailComponent,
        data: {
          viewType: ViewType.edit,
        },
      },
      {
        path: 'category-detail/:id',
        component: CategoryDetailComponent,
        data: {
          viewType: ViewType.detail,
        },
      },
      { path: 'search', component: IngredientsSearchComponent },
    ],
  },
];

export const IngredientsRoutesModule = RouterModule.forChild(routes);
