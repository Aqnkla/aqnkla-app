import { RecipeModel } from './../../../../../common-modules/food/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

export class Summary {
  weight: number;
  callories: number;
  fat: number;
  protein: number;
  carbs: number;
  constructor() {
    this.weight = 0;
    this.callories = 0;
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
  @Input() recipe: RecipeModel;
  constructor() {}

  get summary(): Summary {
    const summary = new Summary();
    this.recipe.ingredients.forEach((b) => {
      const value = b.weight.dataFactor * b.weight.dataValueRelative;
      const ratio = value / 100;
      summary.weight += value;
      summary.callories += b.item.calories * ratio;
      summary.fat += b.item.fat * ratio;
      summary.carbs += b.item.carbs * ratio;
      summary.protein += b.item.protein * ratio;
    });
    return summary;
  }

  ngOnInit(): void {}
}
