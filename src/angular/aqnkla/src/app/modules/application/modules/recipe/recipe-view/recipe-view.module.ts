import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RecipeSearchComponent, RecipeViewComponent],
})
export class RecipeViewModule {}
