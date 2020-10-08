import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientItemViewModel } from 'src/app/models/api/aqnkla-food';
import { AmountInputType, DataValue } from 'src/app/models/data.model';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

@Component({
  selector: 'aqn-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.scss'],
})
export class ItemAmountComponent implements OnInit {
  AmountInputType = AmountInputType;
  @Input() weight: DataValue;
  @Input() ingredient: IngredientItemViewModel;
  @Output() weightChanged = new EventEmitter<DataValue>();
  units = DataHelper.getWeightUnitsGram(0);

  currentInputType: AmountInputType = AmountInputType.weight;
  constructor() {}

  ngOnInit(): void {}

  changeType(inputType: AmountInputType): void {
    this.currentInputType = inputType;
  }
}
