import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { FatType, FatViewModel } from 'src/app/models/api/aqnkla-food';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

export class DeleteFatDialogComponent extends DialogDeleteComponent<
FatComponent
> {}

@Component({
  selector: 'aqn-fat',
  templateUrl: './fat.component.html',
  styleUrls: ['./fat.component.scss',
  './../../../../styles/ingredient.style.scss']
})
export class FatComponent implements OnInit {
  @Input() fats: FatViewModel[];
  @Output() valueChanged = new EventEmitter<FatViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableFats: FatType[];

  activeSelectItem: FatType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableFats = [];
    const fats = ObjectHelper.getEnumValues<FatType>(FatType);
    for (const fat of fats) {
      if (
        this.fats === undefined ||
        this.fats.filter((b) => b.fat === fat).length === 0
      ) {
        this.availableFats.push(fat);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.fats === undefined) {
      this.fats = [];
    }
    this.fats.push({
      fat: this.activeSelectItem,
      fatLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.fats);
  }

  deleteItem(value: FatViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteFatDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.fat}`,
        message: `Do you want remove ${value.fat}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.fats = self.fats.filter((obj) => obj.fat !== value.fat);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.fats);
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
