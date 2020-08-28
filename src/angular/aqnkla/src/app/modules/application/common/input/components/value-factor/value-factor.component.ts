import { Component, OnInit } from '@angular/core';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DataValue } from 'src/app/modules/application/models/ingredient.model';

@Component({
  selector: 'aqn-value-factor',
  templateUrl: './value-factor.component.html',
  styleUrls: ['./value-factor.component.scss'],
})
export class ValueFactorComponent implements OnInit {
  units = DataHelper.getWeightUnitsGram(0);
  value: DataValue = new DataValue();
  label: string;

  constructor() {}

  ngOnInit(): void {}

  getQuantitySummary(value: number, ratio: number): string {
    const data = value * ratio * 1000;
    if (data > 10) {
      return `${data.toFixed(0)} mg`;
    } else if (data >= 1) {
      return `${data.toFixed(1)} mg`;
    } else if (data >= 0.1) {
      return `${data.toFixed(2)} mg`;
    } else if (data >= 0.01) {
      return `${data.toFixed(3)} mg`;
    } else if (data >= 0.001) {
      return `${data.toFixed(4)} mg`;
    } else if (data >= 0.0001) {
      return `${data.toFixed(5)} mg`;
    }
    return `${data.toFixed(6)} mg`;
  }
}
