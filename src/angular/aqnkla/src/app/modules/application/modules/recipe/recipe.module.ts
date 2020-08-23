import { RecipeRoutesModule } from './recipe.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDashboardComponent } from './components/recipe-dashboard/recipe-dashboard.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeRootComponent } from './components/recipe-root/recipe-root.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RecipeIngredientsComponent } from './components/recipe-detail/recipe-ingredients/recipe-ingredients.component';

@NgModule({
  declarations: [
    RecipeDashboardComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeSearchComponent,
    RecipeRootComponent,
    RecipeIngredientsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutesModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class RecipeModule {}
