import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  IngredientItemModel,
  DataValue,
} from 'src/app/modules/application/models/ingredient.model';
import { ItemClientService } from 'src/app/modules/application/services/ingredient/item-client/item-client.service';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DeleteMineralDialogComponent } from '../../../../ingredients/components/item/values/item-mineral/delete-dialog/delete-mineral-dialog.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'aqn-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss'],
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() ingredients: DataValue<IngredientItemModel>[];
  @Output() valueChanged = new EventEmitter<DataValue<IngredientItemModel>[]>();
  units = DataHelper.getWeightUnitsGram(0);
  activeSelectItem: IngredientItemModel;
  avalibleItems: IngredientItemModel[];
  constructor(
    private itemClientService: ItemClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.ingredients === undefined) {
      this.ingredients = [];
    }
    this.ingredients.push({
      item: this.activeSelectItem,
      quantity: 0,
      quantityRatio: 1,
      quantityLabel: 'g',
    });
    this.activeSelectItem = undefined;
    this.valueChanged.emit(this.ingredients);
  }

  private loadList(): void {
    this.itemClientService.getAll().subscribe((b) => (this.avalibleItems = b));
  }

  deleteItem(value: DataValue<IngredientItemModel>): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteMineralDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.item}`,
        message: `Do you want remove ${value.item.name}: ${value.quantity} ${value.quantityLabel}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.ingredients = self.ingredients.filter(
          (obj) => obj.item !== value.item
        );
        self.valueChanged.emit(self.ingredients);
      }
    });
  }
}
