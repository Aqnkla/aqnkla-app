import { Component } from '@angular/core';
import { CarbohydrateViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-carbohydrate',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class CarbohydrateComponent extends AbstractValueComponent<
  CarbohydrateViewModel
> {
  areEqualType(
    value1: CarbohydrateViewModel,
    value2: CarbohydrateViewModel
  ): boolean {
    return value1.carbohydrate === value2.carbohydrate;
  }
  getLabel(value: CarbohydrateViewModel): string {
    return value.carbohydrateLabel;
  }
  getLabelWithValue(value: CarbohydrateViewModel): string {
    return value.carbohydrateLabel;
  }
}
