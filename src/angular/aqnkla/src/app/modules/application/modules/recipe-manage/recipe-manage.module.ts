import { MatSliderModule } from '@angular/material/slider';
import { AqnklaInputModule } from './../../common-modules/aqnkla-input/aqnkla-input.module';
import { RecipeManageRoutesModule } from './recipe-manage.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDashboardComponent } from './components/recipe-dashboard/recipe-dashboard.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeRootComponent } from './components/recipe-root/recipe-root.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RecipeIngredientsComponent } from './components/recipe-detail/recipe-ingredients/recipe-ingredients.component';
import { ItemAmountComponent } from './components/recipe-detail/item-amount/item-amount.component';
import { RecipeSummaryComponent } from './components/recipe-detail/recipe-summary/recipe-summary.component';
import { FoodModule } from '../../common-modules/food/food.module';
import { StepSummaryComponent } from './components/recipe-detail/step-summary/step-summary.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    RecipeDashboardComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeRootComponent,
    RecipeIngredientsComponent,
    ItemAmountComponent,
    RecipeSummaryComponent,
    StepSummaryComponent,
  ],
  imports: [
    RecipeManageRoutesModule,
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
    MatSliderModule,
    MatCheckboxModule,
    AqnklaInputModule,
    FoodModule,
  ],
})
export class RecipeManageModule {}
