import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    IngredientSearchComponent,
    RecipeSearchComponent,
    RecipeViewComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    IngredientSearchComponent,
    RecipeSearchComponent,
    RecipeViewComponent,
  ],
})
export class FoodModule {}
