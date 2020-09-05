import { Component, OnInit, Input, Output } from '@angular/core';
import { AmountInputType } from 'src/app/modules/application/common-modules/food/models/common/amount-input-type.model';
import { DataValue } from 'src/app/modules/application/common-modules/food/models/common/data-value.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { EventEmitter } from 'events';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

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
