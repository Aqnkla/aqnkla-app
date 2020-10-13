import { MineralType } from '../../../../../../../../models/api/aqnkla-food';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { MineralViewModel } from 'src/app/models/api/aqnkla-food';

export class DeleteMineralDialogComponent extends DialogDeleteComponent<
MineralComponent
> {}

@Component({
  selector: 'aqn-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: [
    './mineral.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class MineralComponent implements OnInit {
  @Input() minerals: MineralViewModel[];
  @Output() valueChanged = new EventEmitter<MineralViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableMinerals: MineralType[];

  activeSelectItem: MineralType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableMinerals = [];
    const minerals = ObjectHelper.getEnumValues<MineralType>(MineralType);
    for (const mineral of minerals) {
      if (
        this.minerals === undefined ||
        this.minerals.filter((b) => b.mineral === mineral).length === 0
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
      mineral: this.activeSelectItem,
      mineralLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.minerals);
  }

  deleteItem(value: MineralViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteMineralDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.mineral}`,
        message: `Do you want remove ${value.mineral}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.minerals = self.minerals.filter((obj) => obj.mineral !== value.mineral);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.minerals);
      }
    });
  }

  getQuantitySummary(weightGrams: number): string {
    const data = weightGrams *  1000;
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
