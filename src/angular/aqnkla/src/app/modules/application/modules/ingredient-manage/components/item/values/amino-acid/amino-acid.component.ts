import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { AminoAcidType, AminoAcidViewModel } from 'src/app/models/api/aqnkla-food';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

export class DeleteAminoAcidDialogComponent extends DialogDeleteComponent<
AminoAcidComponent
> {}

@Component({
  selector: 'aqn-amino-acid',
  templateUrl: './amino-acid.component.html',
  styleUrls: ['./amino-acid.component.scss',
  './../../../../styles/ingredient.style.scss']
})
export class AminoAcidComponent implements OnInit {
  @Input() aminoAcids: AminoAcidViewModel[];
  @Output() valueChanged = new EventEmitter<AminoAcidViewModel[]>();
  units = DataHelper.getWeightUnitsGram(0);
  availableAminoAcids: AminoAcidType[];

  activeSelectItem: AminoAcidType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
  }

  private updateAvailableMinerals(): void {
    this.availableAminoAcids = [];
    const aminoAcids = ObjectHelper.getEnumValues<AminoAcidType>(AminoAcidType);
    for (const aminoAcid of aminoAcids) {
      if (
        this.aminoAcids === undefined ||
        this.aminoAcids.filter((b) => b.aminoAcid === aminoAcid).length === 0
      ) {
        this.availableAminoAcids.push(aminoAcid);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.aminoAcids === undefined) {
      this.aminoAcids = [];
    }
    this.aminoAcids.push({
      aminoAcid: this.activeSelectItem,
      aminoAcidLabel: '',
      weightGrams: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.aminoAcids);
  }

  deleteItem(value: AminoAcidViewModel): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteAminoAcidDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.aminoAcid}`,
        message: `Do you want remove ${value.aminoAcid}: ${value.weightGrams}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result && result.delete) {
        self.aminoAcids = self.aminoAcids.filter((obj) => obj.aminoAcid !== value.aminoAcid);
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.aminoAcids);
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
