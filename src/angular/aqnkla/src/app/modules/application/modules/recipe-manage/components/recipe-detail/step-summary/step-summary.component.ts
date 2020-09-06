import { StepItem } from './../../../../../common-modules/food/models/recipe/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepSummary } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';

@Component({
  selector: 'aqn-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss'],
})
export class StepSummaryComponent implements OnInit {
  private $stepSummary: StepSummary = { steps: [] };
  @Input() recipeIngredients: ItemData<IngredientItemModel>[];
  @Input() set stepSummary(value: StepSummary) {
    if (value) {
      this.$stepSummary = value;
    }
  }

  get stepSummary(): StepSummary {
    return this.$stepSummary;
  }

  @Output() stepSummaryChanged = new EventEmitter<StepSummary>();
  constructor() {}

  ngOnInit(): void {}

  emitChange(event: StepItem): void {
    this.stepSummaryChanged.emit(this.stepSummary);
  }

  addStep(): void {
    this.$stepSummary.steps.push({
      id: RandomHelper.uuidv4(),
      previousStepId: undefined,
      name: '',
      addedIngredients: [],
    });
    this.stepSummaryChanged.emit(this.stepSummary);
  }
}
