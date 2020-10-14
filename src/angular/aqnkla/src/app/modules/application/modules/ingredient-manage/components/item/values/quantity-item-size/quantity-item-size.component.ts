import { Component } from '@angular/core';
import { QuantityItemSizeViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-quantity-item-size',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class QuantityItemSizeComponent extends AbstractValueComponent<
  QuantityItemSizeViewModel
> {
  areEqualType(
    value1: QuantityItemSizeViewModel,
    value2: QuantityItemSizeViewModel
  ): boolean {
    return value1.quantity === value2.quantity;
  }
  getLabel(value: QuantityItemSizeViewModel): string {
    return value.quantityLabel;
  }
  getLabelWithValue(value: QuantityItemSizeViewModel): string {
    return value.quantityLabel;
  }
}
