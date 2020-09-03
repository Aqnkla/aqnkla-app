import { Allergan, AllerganValue, AllerganImportance } from '../../../../../../common-modules/food/models/allergan.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAllerganDialogComponent } from './delete-dialog/delete-allergan-dialog.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-item-allergan',
  templateUrl: './item-allergan.component.html',
  styleUrls: [
    './item-allergan.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemAllerganComponent implements OnInit {
  @Input() allergans: AllerganValue[];
  @Output() valueChanged = new EventEmitter<AllerganValue[]>();
  avalibleAllergans: Allergan[];
  allerganImportances: AllerganImportance[];
  activeSelectItem: Allergan;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvalibleMinerals();
    this.allerganImportances = ObjectHelper.getEnumValues<AllerganImportance>(
      AllerganImportance
    );
  }

  private updateAvalibleMinerals(): void {
    this.avalibleAllergans = [];
    const allergans = ObjectHelper.getEnumValues<Allergan>(Allergan);
    for (const allergan of allergans) {
      if (
        this.allergans === undefined ||
        this.allergans.filter((b) => b.allergan === allergan).length === 0
      ) {
        this.avalibleAllergans.push(allergan);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.allergans === undefined) {
      this.allergans = [];
    }
    this.allergans.push({
      allergan: this.activeSelectItem,
      allerganImportance: 0,
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.allergans);
  }

  deleteItem(value: AllerganValue): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteAllerganDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.allergan}`,
        message: `Do you want remove ${value.allergan}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.allergans = self.allergans.filter(
          (obj) => obj.allergan !== value.allergan
        );
        self.updateAvalibleMinerals();
        self.valueChanged.emit(self.allergans);
      }
    });
  }
}
