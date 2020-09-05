import { Allergen, AllergenValue, AllergenImportance } from '../../../../../../common-modules/food/models/ingredient/parameters/allergen.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAllerganDialogComponent } from './delete-dialog/delete-allergen-dialog.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-item-allergan',
  templateUrl: './item-allergen.component.html',
  styleUrls: [
    './item-allergen.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class ItemAllergenComponent implements OnInit {
  @Input() allergens: AllergenValue[];
  @Output() valueChanged = new EventEmitter<AllergenValue[]>();
  availableAllergens: Allergen[];
  allergenImportance: AllergenImportance[];
  activeSelectItem: Allergen;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
    this.allergenImportance = ObjectHelper.getEnumValues<AllergenImportance>(
      AllergenImportance
    );
  }

  private updateAvailableMinerals(): void {
    this.availableAllergens = [];
    const allergens = ObjectHelper.getEnumValues<Allergen>(Allergen);
    for (const allergan of allergens) {
      if (
        this.allergens === undefined ||
        this.allergens.filter((b) => b.allergen === allergan).length === 0
      ) {
        this.availableAllergens.push(allergan);
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
    this.updateAvailableMinerals();
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
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.allergens);
      }
    });
  }
}
