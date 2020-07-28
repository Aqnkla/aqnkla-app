import { DiaryRoutesModule } from './diary.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryDashboardComponent } from './components/diary-dashboard/diary-dashboard.component';
import { DiaryWeekComponent } from './components/diary-week/diary-week.component';
import { DiaryDayComponent } from './components/diary-day/diary-day.component';
import { DiaryManageComponent } from './components/diary-manage/diary-manage.component';
import { DiaryRootComponent } from './components/diary-root/diary-root.component';


@NgModule({
  declarations: [
    DiaryDashboardComponent,
    DiaryWeekComponent,
    DiaryDayComponent,
    DiaryRootComponent,
    DiaryManageComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutesModule
  ]
})
export class DiaryModule { }
