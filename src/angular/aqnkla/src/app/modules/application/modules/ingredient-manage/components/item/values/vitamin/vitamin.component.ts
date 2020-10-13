import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { VitaminType, VitaminViewModel } from 'src/app/models/api/aqnkla-food';

export class DeleteVitaminDialogComponent extends DialogDeleteComponent<
  VitaminComponent
> {}

@Component({
  selector: 'aqn-vitamin',
  templateUrl: './vitamin.component.html',
  styleUrls: [
    './vitamin.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class VitaminComponent implements OnInit {
  @Input() vitamins: VitaminViewModel[];
  @Output() valueChanged = new EventEmitter<VitaminViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableVitamins: VitaminType[];

  activeSelectItem: VitaminType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableVitamins = [];
    const vitamins = ObjectHelper.getEnumValues<VitaminType>(VitaminType);
    for (const vitamin of vitamins) {
      if (
        this.vitamins === undefined ||
        this.vitamins.filter((b) => b.vitamin === vitamin).length === 0
      ) {
        this.availableVitamins.push(vitamin);
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
      vitamin: this.activeSelectItem,
      vitaminLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.vitamins);
  }

  deleteItem(value: VitaminViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteVitaminDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.vitamin}`,
        message: `Do you want remove ${value.vitamin}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.vitamins = self.vitamins.filter((obj) => obj.vitamin !== value.vitamin);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.vitamins);
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
