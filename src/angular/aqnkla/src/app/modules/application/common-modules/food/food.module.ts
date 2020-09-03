import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    IngredientSearchComponent,
    RecipeSearchComponent,
    RecipeViewComponent,
  ],
  imports: [
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
  exports: [
    IngredientSearchComponent,
    RecipeSearchComponent,
    RecipeViewComponent,
  ],
})
export class FoodModule {}
