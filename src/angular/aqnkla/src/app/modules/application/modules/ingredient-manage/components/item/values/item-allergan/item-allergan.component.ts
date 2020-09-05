import { Allergen, AllergenValue, AllergenImportance } from '../../../../../../common-modules/food/models/ingredient/parameters/allergen.model';
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
  @Input() allergens: AllergenValue[];
  @Output() valueChanged = new EventEmitter<AllergenValue[]>();
  avalibleAllergens: Allergen[];
  allergenImportances: AllergenImportance[];
  activeSelectItem: Allergen;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvalibleMinerals();
    this.allergenImportances = ObjectHelper.getEnumValues<AllergenImportance>(
      AllergenImportance
    );
  }

  private updateAvalibleMinerals(): void {
    this.avalibleAllergens = [];
    const allergens = ObjectHelper.getEnumValues<Allergen>(Allergen);
    for (const allergan of allergens) {
      if (
        this.allergens === undefined ||
        this.allergens.filter((b) => b.allergen === allergan).length === 0
      ) {
        this.avalibleAllergens.push(allergan);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.allergens === undefined) {
      this.allergens = [];
    }
    this.allergens.push({
      allergen: this.activeSelectItem,
      allergenImportance: 0,
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.allergens);
  }

  deleteItem(value: AllergenValue): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteAllerganDialogComponent, {
      width: '250px',
      data: {
        header: `Remove ${value.allergen}`,
        message: `Do you want remove ${value.allergen}`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.allergens = self.allergens.filter(
          (obj) => obj.allergen !== value.allergen
        );
        self.updateAvalibleMinerals();
        self.valueChanged.emit(self.allergens);
      }
    });
  }
}
