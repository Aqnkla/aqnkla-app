import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { Vitamin } from 'src/app/modules/application/common-modules/food/models/ingredient/parameters/vitamin.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';

export class DeleteVitaminDialogComponent extends DialogDeleteComponent<
  ItemVitaminComponent
> {}

@Component({
  selector: 'aqn-item-vitamin',
  templateUrl: './item-vitamin.component.html',
  styleUrls: [
    './item-vitamin.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemVitaminComponent implements OnInit {
  @Input() vitamins: ItemData<Vitamin>[];
  @Output() valueChanged = new EventEmitter<ItemData<Vitamin>[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableVitamins: Vitamin[];

  activeSelectItem: Vitamin;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableVitamins = [];
    const minerals = ObjectHelper.getEnumValues<Vitamin>(Vitamin);
    for (const mineral of minerals) {
      if (
        this.vitamins === undefined ||
        this.vitamins.filter((b) => b.item === mineral).length === 0
      ) {
        this.availableVitamins.push(mineral);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.vitamins === undefined) {
      this.vitamins = [];
    }
    this.vitamins.push({
      item: this.activeSelectItem,
      weight: {
        label: 'g',
        dataFactor: 1,
        dataValueRelative: 1,
      },
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.vitamins);
  }

  deleteItem(value: ItemData<Vitamin>): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteVitaminDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.item}`,
        message: `Do you want remove ${value.item}: ${value.weight} ${value.weight.label}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.vitamins = self.vitamins.filter((obj) => obj.item !== value.item);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.vitamins);
      }
    });
  }

  getQuantitySummary(value: number, ratio: number): string {
    const data = value * ratio * 1000;
    if (data > 10) {
      return `${data.toFixed(0)} mg`;
    } else if (data >= 1) {
      return `${data.toFixed(1)} mg`;
    } else if (data >= 0.1) {
      return `${data.toFixed(2)} mg`;
    } else if (data >= 0.01) {
      return `${data.toFixed(3)} mg`;
    } else if (data >= 0.001) {
      return `${data.toFixed(4)} mg`;
    } else if (data >= 0.0001) {
      return `${data.toFixed(5)} mg`;
    }
    return `${data.toFixed(6)} mg`;
  }
}
