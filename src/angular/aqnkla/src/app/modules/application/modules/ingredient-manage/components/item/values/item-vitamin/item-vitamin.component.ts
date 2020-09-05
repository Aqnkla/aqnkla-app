import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMineralDialogComponent } from '../item-mineral/delete-dialog/delete-mineral-dialog.component';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { Vitamin } from 'src/app/modules/application/common-modules/food/models/ingredient/parameters/vitamin.model';

@Component({
  selector: 'aqn-item-vitamin',
  templateUrl: './item-vitamin.component.html',
  styleUrls: [
    './item-vitamin.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemVitaminComponent implements OnInit {
  @Input() vitmains: ItemData<Vitamin>[];
  @Output() valueChanged = new EventEmitter<ItemData<Vitamin>[]>();
  units = DataHelper.getWeightUnitsGram(0);
  avalibleVitamins: Vitamin[];

  activeSelectItem: Vitamin;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvalibleMinerals();
  }

  private updateAvalibleMinerals(): void {
    this.avalibleVitamins = [];
    const minerals = ObjectHelper.getEnumValues<Vitamin>(Vitamin);
    for (const mineral of minerals) {
      if (
        this.vitmains === undefined ||
        this.vitmains.filter((b) => b.item === mineral).length === 0
      ) {
        this.avalibleVitamins.push(mineral);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.vitmains === undefined) {
      this.vitmains = [];
    }
    this.vitmains.push({
      item: this.activeSelectItem,
      weight: {
        label: 'g',
        dataFactor: 1,
        dataValueRelative: 1
      }
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.vitmains);
  }

  deleteItem(value: ItemData<Vitamin>): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteMineralDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.item}`,
        message: `Do you want remove ${value.item}: ${value.weight} ${value.weight.label}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.vitmains = self.vitmains.filter((obj) => obj.item !== value.item);
        self.updateAvalibleMinerals();
        self.valueChanged.emit(self.vitmains);
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
