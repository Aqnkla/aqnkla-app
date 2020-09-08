import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { StepItem } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';

@Component({
  selector: 'aqn-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss'],
})
export class StepItemComponent implements OnInit {
  @Input() recipeIngredients: ItemData<IngredientItemModel>[];
  @Input() step: StepItem;
  constructor() {}

  ngOnInit(): void {}

  changeIngredient(
    isChecked: boolean,
    ingredient: ItemData<IngredientItemModel>,
    step: StepItem
  ): void {
    if (isChecked) {
      const newIngredient = JSON.parse(JSON.stringify(ingredient));
      step.addedIngredients.push(newIngredient);
    } else {
      step.addedIngredients = step.addedIngredients.filter(
        (b) => b.item.id !== ingredient.item.id
      );
    }
  }

  getIngredient(id: string): ItemData<IngredientItemModel> {
    const ingredient = this.recipeIngredients.filter((b) => b.item.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0];
    }
  }

  getIngredientMax(id: string): number {
    const ingredient = this.recipeIngredients.filter((b) => b.item.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0].weight.dataValueRelative;
    }
  }
}
