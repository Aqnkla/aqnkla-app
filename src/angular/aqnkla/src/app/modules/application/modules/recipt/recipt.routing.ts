import { ReciptDashboardComponent } from './components/recipt-dashboard/recipt-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReciptDetailComponent } from './components/recipt-detail/recipt-detail.component';
import { ReciptListComponent } from './components/recipt-list/recipt-list.component';
import { ReciptSearchComponent } from './components/recipt-search/recipt-search.component';
import { ReciptRootComponent } from './components/recipt-root/recipt-root.component';
import { ViewType } from 'src/app/models/common.model';

const routes: Routes = [
  {
    path: '',
    component: ReciptRootComponent,
    children: [
      { path: '', component: ReciptListComponent },
      { path: 'dashboard', component: ReciptDashboardComponent },
      { path: 'list', component: ReciptListComponent },
      { path: 'search', component: ReciptSearchComponent },
      {
        path: 'add',
        component: ReciptDetailComponent,
        data: {
          viewType: ViewType.add,
        },
      },
      {
        path: 'edit/:id',
        component: ReciptDetailComponent,
        data: {
          viewType: ViewType.edit,
        },
      },
      {
        path: 'detail/:id',
        component: ReciptDetailComponent,
        data: {
          viewType: ViewType.detail,
        },
      },
    ],
  },
];

export const ReciptRoutesModule = RouterModule.forChild(routes);
