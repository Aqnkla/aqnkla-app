import { RecipeViewModel } from 'src/app/models/api/aqnkla-food';
import { Component, OnInit, Input } from '@angular/core';

export class Summary {
  weight: number;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  constructor() {
    this.weight = 0;
    this.calories = 0;
    this.fat = 0;
    this.protein = 0;
    this.carbs = 0;
  }
}

@Component({
  selector: 'aqn-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.scss'],
})
export class RecipeSummaryComponent implements OnInit {
  @Input() recipe: RecipeViewModel;
  constructor() {}

  get summary(): Summary {
    const summary = new Summary();
    this.recipe.ingredients.forEach((b) => {
      summary.weight += b.weightGrams;
      summary.calories += b.ingredient.calories * (b.weightGrams / 100);
      summary.fat += b.ingredient.fatTotal * (b.weightGrams / 100);
      summary.carbs += b.ingredient.carbsTotal * (b.weightGrams / 100);
      summary.protein += b.ingredient.protein * (b.weightGrams / 100);
    });
    return summary;
  }

  ngOnInit(): void {}
}
