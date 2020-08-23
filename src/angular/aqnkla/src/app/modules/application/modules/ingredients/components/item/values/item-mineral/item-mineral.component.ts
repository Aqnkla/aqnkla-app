import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mineral, DataValue } from '../../../../models/ingredient.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import {
  DeleteDialogComponent,
  DialogDeleteData,
} from './delete-dialog/delete-dialog.component';
import { DataHelper } from './../../../../../../helpers/data.helper';

@Component({
  selector: 'aqn-item-mineral',
  templateUrl: './item-mineral.component.html',
  styleUrls: [
    './item-mineral.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemMineralComponent implements OnInit {
  @Input() minerals: DataValue<Mineral>[];
  @Output() valueChanged = new EventEmitter<DataValue<Mineral>[]>();
  units = DataHelper.getUnits();
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
      quantity: 0,
      quantityRatio: 1,
      quantityLabel: 'g',
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.minerals);
  }

  deleteItem(value: DataValue<Mineral>): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.item}`,
        message: `Do you want remove ${value.item}: ${value.quantity} ${value.quantityLabel}`,
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
