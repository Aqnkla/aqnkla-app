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
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ItemVitaminComponent } from './components/item/values/item-vitamin/item-vitamin.component';
import { ItemMineralComponent } from './components/item/values/item-mineral/item-mineral.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/item/values/item-mineral/delete-dialog/delete-dialog.component';
@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngridientsDashboardComponent,
    IngredientsSearchComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemVitaminComponent,
    ItemMineralComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IngredientsRoutesModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [IngredientsRootComponent],
})
export class IngredientsModule {}
