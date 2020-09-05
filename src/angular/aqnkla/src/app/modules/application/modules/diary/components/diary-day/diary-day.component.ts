import { DiaryService } from './../../services/diary/diary.service';
import { DiaryDayModel, MealModel } from './../../models/diary.model';
import { Component, OnInit } from '@angular/core';
import { DateHelper } from '../../../../helpers/common/date.helper';
import { ActivatedRoute } from '@angular/router';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { MealDeleteComponent } from './meal-delete/meal-delete.component';
import { MealClientService } from '../../services/meal-client/meal-client.service';
import { RecipeClientService } from '../../../recipe-manage/services/recipe-manage-client/recipe-manage-client.service';
import { RecipeModel } from 'src/app/modules/application/common-modules/food/models/recipe/recipe.model';

@Component({
  selector: 'aqn-diary-day',
  templateUrl: './diary-day.component.html',
  styleUrls: ['./diary-day.component.scss'],
})
export class DiaryDayComponent implements OnInit {
  currentDay: Date;
  diaryDayModel: DiaryDayModel;
  isAddMealActive: boolean;
  addedRecipe: RecipeModel;

  get calories(): number {
    let cal = 0;
    if (this.diaryDayModel && this.diaryDayModel.meals) {
      this.diaryDayModel.meals.forEach((b) => {
        b.ingredients.forEach(
          (i) =>
            (cal +=
              (i.item.calories *
                (i.weight.dataValueRelative * i.weight.dataFactor)) /
              100)
        );
      });
    }
    return cal;
  }

  get currentDayString(): string {
    return DateHelper.getDateString(this.currentDay);
  }
  get previousDayString(): string {
    return DateHelper.getDateString(DateHelper.addDays(this.currentDay, -1));
  }
  get nextDayString(): string {
    return DateHelper.getDateString(DateHelper.addDays(this.currentDay, 1));
  }
  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService,
    private mealClientService: MealClientService,
    private recipeClientService: RecipeClientService,
    public dialog: MatDialog
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.date) {
        this.currentDay = DateHelper.getDate(params.date);
      } else {
        this.currentDay = new Date();
      }
      this.diaryService
        .getDiaryModel(this.currentDay)
        .subscribe((d) => (this.diaryDayModel = d));
    });
  }

  ngOnInit(): void {
    this.diaryService
      .getDiaryModel(this.currentDay)
      .subscribe((d) => (this.diaryDayModel = d));
  }

  addMeal(): void {
    this.isAddMealActive = true;
  }

  addMealConfirm(): void {
    if (this.addedRecipe && this.isAddMealActive === true) {
      const meal = new MealModel();
      meal.id = RandomHelper.uuidv4();
      meal.dateTime = this.currentDay;
      meal.dateNumber = DateHelper.getDateNumber(this.currentDay);
      meal.recipe = this.addedRecipe;
      meal.ingredients = this.addedRecipe.ingredients;
      this.isAddMealActive = false;
      this.mealClientService.add(meal).subscribe(() => this.refreshMeals());
    }
  }

  addMealCancel(): void {
    this.isAddMealActive = false;
  }

  refreshMeals(): void {
    const self = this;
    this.mealClientService
      .getByDate(DateHelper.getDateNumber(self.currentDay))
      .subscribe((b) => (self.diaryDayModel.meals = b));
  }

  saveMeal(meal: MealModel): void {
    const self = this;
    self.mealClientService
      .update(meal.id, meal)
      .subscribe((b) => self.refreshMeals());
  }

  deleteMeal(meal: MealModel): void {
    const self = this;
    const dialogRef = this.dialog.open(MealDeleteComponent, {
      width: '250px',
      data: {
        header: `Remove meal ${meal.recipe.name}`,
        message: `Do you want remove ${meal.recipe.name}?`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.mealClientService
          .delete(meal.id)
          .subscribe((b) => self.refreshMeals());
      }
    });
  }
}
