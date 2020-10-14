import { Component } from '@angular/core';
import { AminoAcidViewModel } from 'src/app/models/api/aqnkla-food';
import { AbstractValueComponent } from '../abstract-value/abstract-value.component';

@Component({
  selector: 'aqn-amino-acid',
  templateUrl: './../abstract-value/abstract-value.component.html',
  styleUrls: [
    './../abstract-value/abstract-value.component.scss',
    './../../../../styles/ingredient.style.scss',
  ],
})
export class AminoAcidComponent extends AbstractValueComponent<
  AminoAcidViewModel
> {
  areEqualType(
    value1: AminoAcidViewModel,
    value2: AminoAcidViewModel
  ): boolean {
    return value1.aminoAcid === value2.aminoAcid;
  }
  getLabel(value: AminoAcidViewModel): string {
    return value.aminoAcidLabel;
  }
  getLabelWithValue(value: AminoAcidViewModel): string {
    return value.aminoAcidLabel;
  }
}
