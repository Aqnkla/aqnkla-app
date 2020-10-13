import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { QuantityItemSize, QuantityItemSizeViewModel } from 'src/app/models/api/aqnkla-food';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

export class DeleteQuantityItemSizeDialogComponent extends DialogDeleteComponent<
QuantityItemSizeComponent
> {}

@Component({
  selector: 'aqn-quantity-item-size',
  templateUrl: './quantity-item-size.component.html',
  styleUrls: ['./quantity-item-size.component.scss',
  './../../../../styles/ingredient.style.scss']
})
export class QuantityItemSizeComponent implements OnInit {
  @Input() quantityItemSizes: QuantityItemSizeViewModel[];
  @Output() valueChanged = new EventEmitter<QuantityItemSizeViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableQuantityItemSizes: QuantityItemSize[];

  activeSelectItem: QuantityItemSize;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableQuantityItemSizes = [];
    const quantityItemSizes = ObjectHelper.getEnumValues<QuantityItemSize>(QuantityItemSize);
    for (const quantityItemSize of quantityItemSizes) {
      if (
        this.quantityItemSizes === undefined ||
        this.quantityItemSizes.filter((b) => b.quantity === quantityItemSize).length === 0
      ) {
        this.availableQuantityItemSizes.push(quantityItemSize);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.quantityItemSizes === undefined) {
      this.quantityItemSizes = [];
    }
    this.quantityItemSizes.push({
      quantity: this.activeSelectItem,
      quantityLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.quantityItemSizes);
  }

  deleteItem(value: QuantityItemSizeViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteQuantityItemSizeDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.quantity}`,
        message: `Do you want remove ${value.quantity}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.quantityItemSizes = self.quantityItemSizes.filter((obj) => obj.quantity !== value.quantity);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.quantityItemSizes);
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
