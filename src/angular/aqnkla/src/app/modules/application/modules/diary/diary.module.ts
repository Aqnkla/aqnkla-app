import { DiaryRoutesModule } from './diary.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryDashboardComponent } from './components/diary-dashboard/diary-dashboard.component';
import { DiaryWeekComponent } from './components/diary-week/diary-week.component';
import { DiaryDayComponent } from './components/diary-day/diary-day.component';
import { DiaryManageComponent } from './components/diary-manage/diary-manage.component';
import { DiaryRootComponent } from './components/diary-root/diary-root.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MealDeleteComponent } from './components/diary-day/meal-delete/meal-delete.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    DiaryDashboardComponent,
    DiaryWeekComponent,
    DiaryDayComponent,
    DiaryRootComponent,
    DiaryManageComponent,
    MealDeleteComponent,
  ],
  imports: [
    CommonModule,
    DiaryRoutesModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSliderModule,
  ],
})
export class DiaryModule {}
