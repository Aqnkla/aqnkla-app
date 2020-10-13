import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { CholesterolType, CholesterolViewModel } from 'src/app/models/api/aqnkla-food';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

export class DeleteCholesterolDialogComponent extends DialogDeleteComponent<
CholesterolComponent
> {}

@Component({
  selector: 'aqn-cholesterol',
  templateUrl: './cholesterol.component.html',
  styleUrls: ['./cholesterol.component.scss',
  './../../../../styles/ingredient.style.scss']
})
export class CholesterolComponent implements OnInit {
  @Input() cholesterols: CholesterolViewModel[];
  @Output() valueChanged = new EventEmitter<CholesterolViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableCholesterols: CholesterolType[];

  activeSelectItem: CholesterolType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableCholesterols = [];
    const cholesterols = ObjectHelper.getEnumValues<CholesterolType>(CholesterolType);
    for (const cholesterol of cholesterols) {
      if (
        this.cholesterols === undefined ||
        this.cholesterols.filter((b) => b.cholesterol === cholesterol).length === 0
      ) {
        this.availableCholesterols.push(cholesterol);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.cholesterols === undefined) {
      this.cholesterols = [];
    }
    this.cholesterols.push({
      cholesterol: this.activeSelectItem,
      cholesterolLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.cholesterols);
  }

  deleteItem(value: CholesterolViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteCholesterolDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.cholesterol}`,
        message: `Do you want remove ${value.cholesterol}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.cholesterols = self.cholesterols.filter((obj) => obj.cholesterol !== value.cholesterol);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.cholesterols);
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
