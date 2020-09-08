import { MatDialog } from '@angular/material/dialog';
import {
  StepItem,
  StepGroup,
  StepType,
} from './../../../../../common-modules/food/models/recipe/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepSummary } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { ItemData } from 'src/app/modules/application/common-modules/food/models/common/item-data.model';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { DialogDeleteData } from 'src/app/models/dialog.model';
import { DialogDeleteComponent } from 'src/app/components/generic/dialog-delete/dialog-delete.component';

export class DeleteStepDialogComponent extends DialogDeleteComponent<
  StepSummaryComponent
> {}

@Component({
  selector: 'aqn-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss'],
})
export class StepSummaryComponent implements OnInit {
  private $stepSummary: StepSummary = {
    steps: [],
    groups: [{ id: RandomHelper.uuidv4(), name: '', description: '' }],
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
      groupId: this.$stepSummary.groups[0].id,
      name: '',
      description: '',
      addedIngredients: [],
      mergedGroups: undefined,
      type: StepType.single,
    });
    this.stepSummaryChanged.emit(this.stepSummary);
  }

  addGroup(): void {
    if (!this.$stepSummary.groups) {
      this.$stepSummary.groups = [];
    }
    this.$stepSummary.groups.push({
      id: RandomHelper.uuidv4(),
      name: `group${this.$stepSummary.groups.length}`,
      description: '',
    });
    this.stepSummaryChanged.emit(this.stepSummary);
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
      if (result && result.delete) {
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
    if (this.$stepSummary.steps) {
      this.$stepSummary.steps.forEach((s) => {
        if (s.groupId === group.id) {
          isDeletePossible = false;
        }
      });
    }
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
        if (result && result.delete) {
          self.$stepSummary.groups = self.$stepSummary.groups.filter(
            (b) => b.id !== group.id
          );
        }
      });
    }
  }
}
