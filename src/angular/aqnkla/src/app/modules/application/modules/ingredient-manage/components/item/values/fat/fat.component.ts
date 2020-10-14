import { Component } from '@angular/core';
import { FatViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-fat',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss']
})
export class FatComponent  extends AbstractValueComponent<FatViewModel>{
  areEqualType(value1: FatViewModel, value2: FatViewModel): boolean {
    return value1.fat === value2.fat;
  }
  getLabel(value: FatViewModel): string {
    return value.fatLabel;
  }
  getLabelWithValue(value: FatViewModel): string {
    return value.fatLabel;
  }
}
