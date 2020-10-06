import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { MineralViewModel } from 'src/app/modules/application/common-modules/food/models/api/aqnkla-food';

export class DeleteMineralDialogComponent extends DialogDeleteComponent<
  ItemMineralComponent
> {}

@Component({
  selector: 'aqn-item-mineral',
  templateUrl: './item-mineral.component.html',
  styleUrls: [
    './item-mineral.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemMineralComponent implements OnInit {
  @Input() minerals: ItemData<MineralViewModel>[];
  @Output() valueChanged = new EventEmitter<ItemData<MineralViewModel>[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableMinerals: MineralViewModel[];

  activeSelectItem: MineralViewModel;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableMinerals = [];
    const minerals = ObjectHelper.getEnumValues<Mineral>(Mineral);
    for (const mineral of minerals) {
      if (
        this.minerals === undefined ||
        this.minerals.filter((b) => b.item === mineral).length === 0
      ) {
        this.availableMinerals.push(mineral);
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
        dataValueRelative: 1,
      },
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
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
      if (result && result.delete) {
        self.minerals = self.minerals.filter((obj) => obj.item !== value.item);
        self.updateAvailableMinerals();
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
