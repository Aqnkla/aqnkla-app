import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientsRootComponent } from './components/root/ingredients-root.component';
import { IngredientsDashboardComponent } from './components/dashboard/ingredients-dashboard.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { VitaminComponent } from './components/item/values/vitamin/vitamin.component';
import { MineralComponent } from './components/item/values/mineral/mineral.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IngredientManageRoutesModule } from './ingredient-manage.routing';
import { AllergenComponent } from './components/item/values/allergen/allergen.component';
import { AminoAcidComponent } from './components/item/values/amino-acid/amino-acid.component';
import { CarbohydrateComponent } from './components/item/values/carbohydrate/carbohydrate.component';
import { CholesterolComponent } from './components/item/values/cholesterol/cholesterol.component';
import { FatComponent } from './components/item/values/fat/fat.component';
import { QuantityItemSizeComponent } from './components/item/values/quantity-item-size/quantity-item-size.component';
@NgModule({
  declarations: [
    IngredientsRootComponent,
    IngredientsDashboardComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ItemListComponent,
    VitaminComponent,
    MineralComponent,
    AllergenComponent,
    AminoAcidComponent,
    CarbohydrateComponent,
    CholesterolComponent,
    FatComponent,
    QuantityItemSizeComponent,
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
