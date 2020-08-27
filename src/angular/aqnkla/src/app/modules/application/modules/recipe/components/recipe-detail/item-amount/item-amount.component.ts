import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientItemModel } from 'src/app/modules/application/models/ingredient.model';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

@Component({
  selector: 'aqn-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.scss'],
})
export class ItemAmountComponent implements OnInit {
  @Input() weight: number;
  @Input() ingredient: IngredientItemModel;
  @Output() weightChanged = new EventEmitter<number>();
  units = DataHelper.getWeightUnitsGram(0);

  constructor() {}

  ngOnInit(): void {}
}
