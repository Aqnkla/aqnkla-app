import { Component, OnInit, Input } from '@angular/core';
import { IngredientValueViewModel, StepItemViewModel } from 'src/app/models/api/aqnkla-food';

@Component({
  selector: 'aqn-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss'],
})
export class StepItemComponent implements OnInit {
  @Input() recipeIngredients: IngredientValueViewModel[];
  @Input() step: StepItemViewModel;
  constructor() {}

  ngOnInit(): void {}

  changeIngredient(
    isChecked: boolean,
    ingredient: IngredientValueViewModel,
    step: StepItemViewModel
  ): void {
    if (isChecked) {
      const newIngredient = JSON.parse(JSON.stringify(ingredient));
      step.addedIngredients.push(newIngredient);
    } else {
      step.addedIngredients = step.addedIngredients.filter(
        (b) => b.ingredient.id !== ingredient.ingredient.id
      );
    }
  }

  getIngredient(id: string): IngredientValueViewModel {
    const ingredient = this.recipeIngredients.filter((b) => b.ingredient.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0];
    }
  }

  getIngredientMax(id: string): number {
    const ingredient = this.recipeIngredients.filter((b) => b.ingredient.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0].weightGrams;
    }
  }
}
