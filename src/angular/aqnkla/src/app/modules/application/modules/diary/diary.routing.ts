import { DiaryDashboardComponent } from './components/diary-dashboard/diary-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DiaryWeekComponent } from './components/diary-week/diary-week.component';
import { DiaryDayComponent } from './components/diary-day/diary-day.component';
import { DiaryManageComponent } from './components/diary-manage/diary-manage.component';
import { DiaryRootComponent } from './components/diary-root/diary-root.component';

const routes: Routes = [
  {
    path: '', component: DiaryRootComponent,
    children: [
      { path: '', component: DiaryDayComponent },
      { path: 'dashboard', component: DiaryDashboardComponent },
      { path: 'week', component: DiaryWeekComponent },
      { path: 'day', component: DiaryDayComponent },
      { path: 'manage', component: DiaryManageComponent }
    ]
  }
];

export const DiaryRoutesModule = RouterModule.forChild(routes);
