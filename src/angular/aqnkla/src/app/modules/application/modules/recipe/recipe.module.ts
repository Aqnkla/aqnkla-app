import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [RecipeSearchComponent, RecipeViewComponent],
  exports: [RecipeSearchComponent],
})
export class RecipeModule {}
