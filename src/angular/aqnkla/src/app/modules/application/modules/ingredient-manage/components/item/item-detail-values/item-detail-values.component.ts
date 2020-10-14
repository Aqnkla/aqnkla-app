import { ValuesViewModel } from './../../../../../../../models/api/aqnkla-food';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'aqn-item-detail-values',
  templateUrl: './item-detail-values.component.html',
  styleUrls: ['./item-detail-values.component.scss'],
})
export class ItemDetailValuesComponent implements OnInit {
  @Input() values: ValuesViewModel;
  @Input() all: ValuesViewModel;
  @Output() valuesChanged = new EventEmitter<ValuesViewModel>();
  constructor() {}

  ngOnInit(): void {}

  emit(): void {
    this.valuesChanged.emit(this.values);
  }
}
