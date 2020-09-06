import { MatDialog } from '@angular/material/dialog';
import {
  StepItem,
  StepGroup,
} from './../../../../../common-modules/food/models/recipe/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepSummary } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { DeleteStepDialogComponent } from './delete-dialog/delete-step-dialog.component';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';

@Component({
  selector: 'aqn-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss'],
})
export class StepSummaryComponent implements OnInit {
  private $stepSummary: StepSummary = {
    steps: [],
    groups: [{ groupNumber: 1, name: '', description: '' }],
  };
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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  emitChange(event: StepItem): void {
    this.stepSummaryChanged.emit(this.stepSummary);
  }

  addStep(): void {
    this.$stepSummary.steps.push({
      id: RandomHelper.uuidv4(),
      previousStepId: undefined,
      sortOrder: this.$stepSummary.steps.length + 1,
      groupNumber: this.$stepSummary.groups[0].groupNumber,
      name: '',
      description: '',
      addedIngredients: [],
    });
    this.stepSummaryChanged.emit(this.stepSummary);
  }

  addGroup(): void {
    this.$stepSummary.groups.push({
      groupNumber: this.$stepSummary.groups.length + 1,
      name: '',
      description: '',
    });
    this.stepSummaryChanged.emit(this.stepSummary);
  }

  changeIngredient(
    isChecked: boolean,
    ingredient: ItemData<IngredientItemModel>,
    step: StepItem
  ): void {
    if (isChecked) {
      const newIngredient = JSON.parse(JSON.stringify(ingredient));
      step.addedIngredients.push(newIngredient);
    } else {
      step.addedIngredients = step.addedIngredients.filter(
        (b) => b.item.id !== ingredient.item.id
      );
    }
  }

  getIngredient(id: string): ItemData<IngredientItemModel> {
    const ingredient = this.recipeIngredients.filter((b) => b.item.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0];
    }
  }

  getIngredientMax(id: string): number {
    const ingredient = this.recipeIngredients.filter((b) => b.item.id === id);
    if (ingredient && ingredient.length === 1) {
      return ingredient[0].weight.dataValueRelative;
    }
  }

  deleteStep(step: StepItem): void {
    const self = this;
    const dialogRef = this.dialog.open(DeleteStepDialogComponent, {
      width: '250px',
      data: {
        header: `Remove recipe ${step.name}`,
        message: `Do you want remove ${step.name}?`,
        delete: false,
        deletePossible: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.$stepSummary.steps = self.$stepSummary.steps.filter(
          (b) => b.id !== step.id
        );
        let index = 1;
        self.$stepSummary.steps
          .sort((v) => v.sortOrder)
          .forEach((s) => {
            s.sortOrder = index;
            index++;
          });
      }
    });
  }

  deleteGroup(group: StepGroup): void {
    const self = this;

    let isDeletePossible = true;
    this.$stepSummary.steps.forEach((s) => {
      if (s.groupNumber === group.groupNumber) {
        isDeletePossible = false;
      }
    });
    const dialogRef = this.dialog.open(DeleteStepDialogComponent, {
      width: '250px',
      data: {
        header: `Remove group`,
        message: isDeletePossible
          ? `Do you want remove ${group.name}?`
          : 'Before delete remove steps from group',
        delete: false,
        deletePossible: isDeletePossible,
      },
    });
    if (isDeletePossible) {
      dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
        if (result.delete) {
          self.$stepSummary.groups = self.$stepSummary.groups.filter(
            (b) => b.groupNumber !== group.groupNumber
          );
        }
      });
    }
  }
}
