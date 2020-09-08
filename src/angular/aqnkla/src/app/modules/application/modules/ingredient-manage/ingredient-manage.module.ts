import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientsRootComponent } from './components/root/ingredients-root.component';
import { IngredientsDashboardComponent } from './components/dashboard/ingredients-dashboard.component';
import { CategoryListComponent, DeleteCategoryDialogComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemListComponent, DeleteItemDialogComponent } from './components/item/item-list/item-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ItemVitaminComponent } from './components/item/values/item-vitamin/item-vitamin.component';
import { ItemMineralComponent, DeleteMineralDialogComponent } from './components/item/values/item-mineral/item-mineral.component';
import { MatDialogModule } from '@angular/material/dialog';import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IngredientManageRoutesModule } from './ingredient-manage.routing';
import { ItemAllergenComponent, DeleteAllerganDialogComponent } from './components/item/values/item-allergen/item-allergen.component';
@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngredientsDashboardComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemVitaminComponent,
    ItemMineralComponent,
    ItemAllergenComponent
  ],
  imports: [
    IngredientManageRoutesModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  exports: [IngredientsRootComponent],
})
export class IngredientsManageModule {}
