import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import {
  IngredientItemViewModel,
  IngredientValueViewModel,
} from 'src/app/models/api/aqnkla-food';

export class DeleteRecipeIngredientsComponent extends DialogDeleteComponent<
  RecipeIngredientsComponent
> {}

@Component({
  selector: 'aqn-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss'],
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() ingredients: IngredientValueViewModel[];
  @Output() valueChanged = new EventEmitter<IngredientValueViewModel[]>();
  activeSelectItem: IngredientItemViewModel;
  searchValue = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addItemConfirm(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.ingredients === undefined) {
      this.ingredients = [];
    }
    this.ingredients.push({
      ingredient: this.activeSelectItem,
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.searchValue = '';
    this.valueChanged.emit(this.ingredients);
  }

  addItemCancel(): void {
    this.searchValue = '';
    this.activeSelectItem = undefined;
  }

  deleteItem(value: IngredientValueViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteRecipeIngredientsComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.ingredient}`,
        message: `Do you want remove ${value.ingredient.name}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.ingredients = self.ingredients.filter(
          (obj) => obj.ingredient !== value.ingredient
        );
        self.valueChanged.emit(self.ingredients);
      }
    });
  }
}
