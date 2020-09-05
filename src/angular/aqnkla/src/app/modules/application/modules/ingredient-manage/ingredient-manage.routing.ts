import { IngredientsDashboardComponent } from './components/dashboard/ingredients-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsRootComponent } from './components/root/ingredients-root.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { ViewType } from 'src/app/models/common.model';
const routes: Routes = [
  {
    path: '',
    component: IngredientsRootComponent,
    children: [
      {
        path: 'dashboard',
        component: IngredientsDashboardComponent,
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
        path: 'item-edit/:id',
        component: ItemDetailComponent,
        data: {
          viewType: ViewType.edit,
        },
      },
      {
        path: 'item-detail/:id',
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
    ],
  },
];

export const IngredientManageRoutesModule = RouterModule.forChild(routes);
