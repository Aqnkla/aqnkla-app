import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mineral, DataValue } from '../../../../models/ingredient.model';
import { ObjectHelper } from 'src/app/modules/application/helpers/common/object.helper';

export interface Unit {
  name: string;
  label: string;
  value: number;
}

@Component({
  selector: 'aqn-item-mineral',
  templateUrl: './item-mineral.component.html',
  styleUrls: ['./item-mineral.component.scss'],
})
export class ItemMineralComponent implements OnInit {
  @Input() minerals: DataValue<Mineral>[];
  @Output() valueChanged = new EventEmitter<DataValue<Mineral>[]>();
  units: Unit[] = [
    { name: 'g', label: 'gram', value: 1 },
    { name: 'mg', label: 'milligram', value: 0.001 },
    { name: 'μg', label: 'microgram', value: 0.000001 },
    { name: 'ng', label: 'nanogram', value: 1e-9 },
  ];
  avalibleMinerals: Mineral[];
  displayedColumns: string[] = ['item', 'quantity'];

  activeSelectItem: Mineral;
  constructor() {}

  ngOnInit(): void {
    this.updateAvalibleMinerals();
  }

  private updateAvalibleMinerals(): void {
    this.avalibleMinerals = [];
    const minerals = ObjectHelper.getEnumValues<Mineral>(Mineral);
    for (const mineral of minerals) {
      if (
        this.minerals === undefined ||
        this.minerals.filter((b) => b.item === mineral).length === 0
      ) {
        this.avalibleMinerals.push(mineral);
      }
    }
  }

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.minerals === undefined) {
      this.minerals = [];
    }
    this.minerals.push({
      item: this.activeSelectItem,
      quantity: 0,
      quantityRatio: 1,
    });
    this.activeSelectItem = undefined;
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.minerals);
  }

  deleteItem(value: DataValue<Mineral>): void {
    this.minerals = this.minerals.filter((obj) => obj.item !== value.item);
    this.updateAvalibleMinerals();
    this.valueChanged.emit(this.minerals);
  }
}
