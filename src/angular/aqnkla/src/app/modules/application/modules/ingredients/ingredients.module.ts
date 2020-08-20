import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientsRootComponent } from './components/root/ingredients-root.component';
import { IngridientsDashboardComponent } from './components/dashboard/ingridients-dashboard.component';
import { IngredientsSearchComponent } from './components/search/ingredients-search.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { IngredientsRoutesModule } from './ingredients.routing';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngridientsDashboardComponent,
    IngredientsSearchComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IngredientsRoutesModule,
    MatSelectModule,
  ],
  exports: [IngredientsRootComponent],
})
export class IngredientsModule {}
