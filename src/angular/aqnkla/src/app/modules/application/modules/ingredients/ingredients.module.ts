import { IngredientsRoutesModule } from './ingredients.routing';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { IngredientsAddComponent } from './components/ingredients-add/ingredients-add.component';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';


@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngridientsDashboardComponent,
    IngredientsAddComponent,
    IngredientsSearchComponent,
    IngredientsListComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutesModule
  ],
  exports: [
    IngredientsRootComponent
  ]
})
export class IngredientsModule { }
