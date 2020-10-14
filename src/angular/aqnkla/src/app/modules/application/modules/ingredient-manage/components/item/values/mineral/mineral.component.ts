import { Component } from '@angular/core';
import { MineralViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-mineral',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class MineralComponent extends AbstractValueComponent<MineralViewModel> {
  areEqualType(value1: MineralViewModel, value2: MineralViewModel): boolean {
    return value1.mineral === value2.mineral;
  }
  getLabel(value: MineralViewModel): string {
    return value.mineralLabel;
  }
  getLabelWithValue(value: MineralViewModel): string {
    return value.mineralLabel;
  }
}
