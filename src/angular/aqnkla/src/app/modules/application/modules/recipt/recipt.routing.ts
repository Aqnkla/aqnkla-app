import { ReciptDashboardComponent } from './components/recipt-dashboard/recipt-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReciptAddComponent } from './components/recipt-add/recipt-add.component';
import { ReciptListComponent } from './components/recipt-list/recipt-list.component';
import { ReciptSearchComponent } from './components/recipt-search/recipt-search.component';
import { ReciptRootComponent } from './components/recipt-root/recipt-root.component';

const routes: Routes = [
  {
    path: '', component: ReciptRootComponent, children: [
      { path: 'dashboard', component: ReciptDashboardComponent },
      { path: 'add', component: ReciptAddComponent },
      { path: 'list', component: ReciptListComponent },
      { path: 'search', component: ReciptSearchComponent }
    ]
  }
];

export const ReciptRoutesModule = RouterModule.forChild(routes);
