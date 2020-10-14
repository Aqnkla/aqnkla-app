import { Component } from '@angular/core';
import { AllergenViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-allergan',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class AllergenComponent extends AbstractValueComponent<
  AllergenViewModel
> {
  areEqualType(value1: AllergenViewModel, value2: AllergenViewModel): boolean {
    throw new Error('Method not implemented.');
  }
  getLabel(value: AllergenViewModel): string {
    return value.allergenLabel;
  }
  getLabelWithValue(value: AllergenViewModel): string {
    return value.allergenLabel;
  }
}
