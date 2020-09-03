import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DataValue } from 'src/app/modules/application/common-modules/food/models/data-value.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient-item.model';
import { AmountInputType } from '../../../../../common-modules/food/models/amount-input-type.model';
@Component({
  selector: 'aqn-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.scss'],
})
export class ItemAmountComponent implements OnInit {
  AmountInputType = AmountInputType;
  @Input() weight: DataValue;
  @Input() ingredient: IngredientItemModel;
  @Output() weightChanged = new EventEmitter<DataValue>();
  units = DataHelper.getWeightUnitsGram(0);

  currentInputType: AmountInputType = AmountInputType.weight;
  constructor() {}

  ngOnInit(): void {}

  changeType(inputType: AmountInputType): void {
    this.currentInputType = inputType;
  }
}
