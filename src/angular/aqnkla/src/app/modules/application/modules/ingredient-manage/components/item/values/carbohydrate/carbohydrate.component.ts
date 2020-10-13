import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { CarbohydrateType, CarbohydrateViewModel } from 'src/app/models/api/aqnkla-food';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

export class DeleteCarbohydrateDialogComponent extends DialogDeleteComponent<
CarbohydrateComponent
> {}

@Component({
  selector: 'aqn-carbohydrate',
  templateUrl: './carbohydrate.component.html',
  styleUrls: ['./carbohydrate.component.scss',
  './../../../../styles/ingredient.style.scss']
})
export class CarbohydrateComponent implements OnInit {
  @Input() carbohydrates: CarbohydrateViewModel[];
  @Output() valueChanged = new EventEmitter<CarbohydrateViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableCarbohydrates: CarbohydrateType[];

  activeSelectItem: CarbohydrateType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableCarbohydrates = [];
    const carbohydrates = ObjectHelper.getEnumValues<CarbohydrateType>(CarbohydrateType);
    for (const carbohydrate of carbohydrates) {
      if (
        this.carbohydrates === undefined ||
        this.carbohydrates.filter((b) => b.carbohydrate === carbohydrate).length === 0
      ) {
        this.availableCarbohydrates.push(carbohydrate);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.carbohydrates === undefined) {
      this.carbohydrates = [];
    }
    this.carbohydrates.push({
      carbohydrate: this.activeSelectItem,
      carbohydrateLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.carbohydrates);
  }

  deleteItem(value: CarbohydrateViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteCarbohydrateDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.carbohydrate}`,
        message: `Do you want remove ${value.carbohydrate}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.carbohydrates = self.carbohydrates.filter((obj) => obj.carbohydrate !== value.carbohydrate);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.carbohydrates);
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
