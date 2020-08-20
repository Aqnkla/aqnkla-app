import { IngredientsRoutesModule } from './ingredients.routing';
import { IngredientsRootComponent } from './components/ingredients-root/ingredients-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsDashboardComponent } from './components/ingridients-dashboard/ingridients-dashboard.component';
import { IngredientsSearchComponent } from './components/ingredients-search/ingredients-search.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngridientsDashboardComponent,
    IngredientsSearchComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IngredientsRoutesModule
  ],
  exports: [
    IngredientsRootComponent
  ]
})
export class IngredientsModule { }
