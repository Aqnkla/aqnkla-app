
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';
import { AllergenImportance, AllergenType, AllergenViewModel } from 'src/app/models/api/aqnkla-food';

export class DeleteAllerganDialogComponent extends DialogDeleteComponent<
  AllergenComponent
> {}

@Component({
  selector: 'aqn-allergan',
  templateUrl: './allergen.component.html',
  styleUrls: [
    './allergen.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class AllergenComponent implements OnInit {
  @Input() allergens: AllergenViewModel[];
  @Output() valueChanged = new EventEmitter<AllergenViewModel[]>();
  availableAllergens: AllergenType[];
  allergenImportance: AllergenImportance[];
  activeSelectItem: AllergenType;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateAvailableMinerals();
    this.allergenImportance = ObjectHelper.getEnumValues<AllergenImportance>(
      AllergenImportance
    );
  }

  private updateAvailableMinerals(): void {
    this.availableAllergens = [];
    const allergens = ObjectHelper.getEnumValues<AllergenType>(AllergenType);
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
      importance: AllergenImportance.Full,
      allergenLabel: '',
      importanceLabel: '',
    });
    this.activeSelectItem = undefined;
    this.updateAvailableMinerals();
    this.valueChanged.emit(this.allergens);
  }

  deleteItem(value: AllergenViewModel): void {
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
      if (result && result.delete) {
        self.allergens = self.allergens.filter(
          (obj) => obj.allergen !== value.allergen
        );
        self.updateAvailableMinerals();
        self.valueChanged.emit(self.allergens);
      }
    });
  }
}
