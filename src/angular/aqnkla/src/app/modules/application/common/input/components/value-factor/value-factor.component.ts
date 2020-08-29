import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';
import { DataValue } from 'src/app/modules/application/models/ingredient.model';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'aqn-value-factor',
  templateUrl: './value-factor.component.html',
  styleUrls: ['./value-factor.component.scss'],
})
export class ValueFactorComponent implements OnInit {
  units = DataHelper.getWeightUnitsGram(0);
  @Input() value: DataValue = new DataValue();
  @Output() valueChanged = new EventEmitter<DataValue>();
  label: string;

  selectClass: {
    width: '20px';
  };

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

  valueChange(event: any): void {
    console.log('valueChange', this.value, event);
    this.valueChanged.emit(this.value);
  }

  unitChange(event: MatSelectChange): void {
    console.log('unitChange', this.value, event);
    this.valueChanged.emit(this.value);
  }
}
