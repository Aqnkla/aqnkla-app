import { ReciptRoutesModule } from './recipt.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReciptDashboardComponent } from './components/recipt-dashboard/recipt-dashboard.component';
import { ReciptDetailComponent } from './components/recipt-detail/recipt-detail.component';
import { ReciptListComponent } from './components/recipt-list/recipt-list.component';
import { ReciptSearchComponent } from './components/recipt-search/recipt-search.component';
import { ReciptRootComponent } from './components/recipt-root/recipt-root.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReciptDashboardComponent,
    ReciptDetailComponent,
    ReciptListComponent,
    ReciptSearchComponent,
    ReciptRootComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReciptRoutesModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class ReciptModule { }
