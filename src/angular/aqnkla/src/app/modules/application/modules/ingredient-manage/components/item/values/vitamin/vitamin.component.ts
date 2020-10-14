import { Component } from '@angular/core';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';
import { VitaminViewModel } from 'src/app/models/api/aqnkla-food';

@Component({
  selector: 'aqn-vitamin',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class VitaminComponent extends AbstractValueComponent<VitaminViewModel> {
  areEqualType(value1: VitaminViewModel, value2: VitaminViewModel): boolean {
    return value1.vitamin === value2.vitamin;
  }
  getLabel(value: VitaminViewModel): string {
    return value.vitaminLabel;
  }
  getLabelWithValue(value: VitaminViewModel): string {
    return value.vitaminLabel;
  }
}
