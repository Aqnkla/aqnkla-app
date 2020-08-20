import { IngredientsRoutesModule } from './ingredients.routing';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngridientsDashboardComponent,
    IngredientsSearchComponent,
    CategoryListComponent,
    CategoryAddComponent,
    ItemAddComponent,
    ItemListComponent
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
