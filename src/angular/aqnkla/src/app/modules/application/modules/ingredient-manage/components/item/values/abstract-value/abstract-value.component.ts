import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataHelper } from 'src/app/modules/application/helpers/data.helper';

@Component({
  selector: 'aqn-abstract-value',
  templateUrl: './abstract-value.component.html',
  styleUrls: ['./abstract-value.component.scss'],
})
export abstract class AbstractValueComponent<TViewModel> implements OnInit {
  @Input() items: TViewModel[];

  @Input() set allItems(value: TViewModel[]) {
    if (value) {
      this.$allItems = value;
      this.updateAvailableItems();
    }
  }

  get allItems(): TViewModel[] {
    return this.$allItems;
  }

  private $allItems: TViewModel[];

  @Output() valueChanged = new EventEmitter<TViewModel[]>();

  units = DataHelper.getWeightUnitsGram(0);
  availableItems: TViewModel[];
  activeSelectItem: TViewModel;
  unitRatio: any;
  weightGrams: number;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  abstract areEqualType(value1: TViewModel, value2: TViewModel): boolean;
  abstract getLabel(value: TViewModel): string;
  abstract getLabelWithValue(value: TViewModel): string;

  addItem(): void {
    if (this.activeSelectItem === undefined) {
      return;
    }
    if (this.items === undefined) {
      this.items = [];
    }
    this.items.push(this.activeSelectItem);
    this.activeSelectItem = undefined;
    this.updateAvailableItems();
    this.valueChanged.emit(this.items);
  }

  deleteItem(value: TViewModel): void {
    this.items = this.items.filter((obj) => !this.areEqualType(obj, value));
    this.updateAvailableItems();
    this.valueChanged.emit(this.items);
  }

  private updateAvailableItems(): void {
    this.availableItems = [];
    const allItems = this.$allItems;
    for (const allergan of allItems) {
      if (
        this.items === undefined ||
        this.items.filter((b) => this.areEqualType(b, allergan)).length === 0
      ) {
        this.availableItems.push(allergan);
      }
    }
  }

  getQuantitySummary(weightGrams: number): string {
    const data = weightGrams * 1000;
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
