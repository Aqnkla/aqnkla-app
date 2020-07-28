import { ReciptRoutesModule } from './recipt.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReciptDashboardComponent } from './components/recipt-dashboard/recipt-dashboard.component';
import { ReciptAddComponent } from './components/recipt-add/recipt-add.component';
import { ReciptListComponent } from './components/recipt-list/recipt-list.component';
import { ReciptSearchComponent } from './components/recipt-search/recipt-search.component';
import { ReciptRootComponent } from './components/recipt-root/recipt-root.component';



@NgModule({
  declarations: [
    ReciptDashboardComponent,
    ReciptAddComponent,
    ReciptListComponent,
    ReciptSearchComponent,
    ReciptRootComponent
  ],
  imports: [
    CommonModule,
    ReciptRoutesModule
  ]
})
export class ReciptModule { }
