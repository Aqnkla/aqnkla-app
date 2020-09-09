import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { MatDialog } from '@angular/material/dialog';
import { ItemClientService } from '../../../../ingredient-manage/services/item-manage-client/item-manage-client.service';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';

export class DeleteRecipeIngredientsComponent extends DialogDeleteComponent<
  RecipeIngredientsComponent
> {}

@Component({
  selector: 'aqn-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss'],
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() ingredients: ItemData<IngredientItemModel>[];
  @Output() valueChanged = new EventEmitter<ItemData<IngredientItemModel>[]>();
  activeSelectItem: IngredientItemModel;
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
      item: this.activeSelectItem,
      weight: {
        label: 'g',
        dataFactor: 1,
        dataValueRelative: 1,
      },
    });
    this.activeSelectItem = undefined;
    this.searchValue = '';
    this.valueChanged.emit(this.ingredients);
  }

  addItemCancel(): void {
    this.searchValue = '';
    this.activeSelectItem = undefined;
  }

  deleteItem(value: ItemData<IngredientItemModel>): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteRecipeIngredientsComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.item}`,
        message: `Do you want remove ${value.item.name}: ${value.weight} ${value.weight.label}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.ingredients = self.ingredients.filter(
          (obj) => obj.item !== value.item
        );
        self.valueChanged.emit(self.ingredients);
      }
    });
  }
}
