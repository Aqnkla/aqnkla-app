import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataValue, Vitamin } from '../../../../models/ingredient.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';

@Component({
  selector: 'aqn-item-vitamin',
  templateUrl: './item-vitamin.component.html',
  styleUrls: ['./item-vitamin.component.scss'],
})
export class ItemVitaminComponent implements OnInit {
  @Input() vitmains: DataValue<Vitamin>[];
  @Output() valueChanged = new EventEmitter<Vitamin[]>();
  avalibleVitamins: Vitamin[];

  constructor() {}

  ngOnInit(): void {
    this.avalibleVitamins = ObjectHelper.getEnumValues<Vitamin>(Vitamin);
  }
}
