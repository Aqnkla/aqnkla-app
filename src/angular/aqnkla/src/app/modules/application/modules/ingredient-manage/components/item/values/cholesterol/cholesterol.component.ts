import { Component } from '@angular/core';
import { CholesterolViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-cholesterol',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class CholesterolComponent extends AbstractValueComponent<
  CholesterolViewModel
> {
  areEqualType(
    value1: CholesterolViewModel,
    value2: CholesterolViewModel
  ): boolean {
    return value1.cholesterol === value2.cholesterol;
  }
  getLabel(value: CholesterolViewModel): string {
    return value.cholesterolLabel;
  }
  getLabelWithValue(value: CholesterolViewModel): string {
    return value.cholesterolLabel;
  }
}
