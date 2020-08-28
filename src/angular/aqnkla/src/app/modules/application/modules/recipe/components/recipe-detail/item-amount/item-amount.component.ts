import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientItemModel, WeightValue } from 'src/app/modules/application/models/ingredient.model';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { AmountInputType } from './../../../models/recipt.model';

@Component({
  selector: 'aqn-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.scss'],
})
export class ItemAmountComponent implements OnInit {
  AmountInputType = AmountInputType;
  @Input() weight: WeightValue;
  @Input() ingredient: IngredientItemModel;
  @Output() weightChanged = new EventEmitter<WeightValue>();
  units = DataHelper.getWeightUnitsGram(0);

  currentInputType: AmountInputType = AmountInputType.weight;
  constructor() {}

  ngOnInit(): void {}

  changeType(inputType: AmountInputType): void {
    this.currentInputType = inputType;
  }
}
