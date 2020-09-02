import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMineralDialogComponent } from './delete-dialog/delete-mineral-dialog.component';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { ItemData, Mineral } from 'src/app/modules/application/modules/ingredient/models/ingredient.model';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-item-mineral',
  templateUrl: './item-mineral.component.html',
  styleUrls: [
    './item-mineral.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemMineralComponent implements OnInit {
  @Input() minerals: ItemData<Mineral>[];
  @Output() valueChanged = new EventEmitter<ItemData<Mineral>[]>();
  units = DataHelper.getWeightUnitsGram(0);
  avalibleMinerals: Mineral[];

  activeSelectItem: Mineral;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvalibleMinerals();
  }

  private updateAvalibleMinerals(): void {
    this.avalibleMinerals = [];
    const minerals = ObjectHelper.getEnumValues<Mineral>(Mineral);
    for (const mineral of minerals) {
      if (
        this.minerals === undefined ||
        this.minerals.filter((b) => b.item === mineral).length === 0
      ) {
        this.avalibleMinerals.push(mineral);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.minerals === undefined) {
      this.minerals = [];
    }
    this.minerals.push({
      item: this.activeSelectItem,
      weight: {
        label: 'g',
        dataFactor: 1,
        dataValueRelative: 1
      }
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.minerals);
  }

  deleteItem(value: ItemData<Mineral>): void {
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
        self.minerals = self.minerals.filter((obj) => obj.item !== value.item);
        self.updateAvalibleMinerals();
        self.valueChanged.emit(self.minerals);
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
