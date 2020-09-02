import { Component, OnInit } from '@angular/core';
import { DateHelper } from '../../../../helpers/common/date.helper';
import { ActivatedRoute } from '@angular/router';
import { DiaryDayModel, MealModel } from './../../../../models/diary.model';
import { DiaryService } from './../../../../services/diary/diary/diary.service';
import { MealClientService } from 'src/app/modules/application/services/diary/meal-client/meal-client.service';
import { RecipeClientService } from 'src/app/modules/application/services/recipe/recipe-client/recipe-client.service';
import { RandomHelper } from 'src/app/modules/application/helpers/common/random.helper';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteData } from 'src/app/modules/application/models/dialog.model';
import { MealDeleteComponent } from './meal-delete/meal-delete.component';

@Component({
  selector: 'aqn-diary-day',
  templateUrl: './diary-day.component.html',
  styleUrls: ['./diary-day.component.scss'],
})
export class DiaryDayComponent implements OnInit {
  currentDay: Date;
  diaryDayModel: DiaryDayModel;
  isAddMealActive: boolean;

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
    this.isAddMealActive = false;
    this.recipeClientService.getAll().subscribe((b) => {
      const meal = new MealModel();
      meal.id = RandomHelper.uuidv4();
      meal.dateTime = this.currentDay;
      meal.dateNumber = DateHelper.getDateNumber(this.currentDay);
      meal.recipe = b[0];
      meal.ingredients = b[0].ingredients;
      this.mealClientService.add(meal).subscribe((b) => this.refreashMeals());
    });
  }

  addMealCancel(): void {
    this.isAddMealActive = false;
  }

  refreashMeals(): void {
    const self = this;
    this.mealClientService
      .getByDate(DateHelper.getDateNumber(self.currentDay))
      .subscribe((b) => (self.diaryDayModel.meals = b));
  }
  saveMeal(meal: MealModel): void {
    const self = this;
    self.mealClientService
      .update(meal.id, meal)
      .subscribe((b) => self.refreashMeals());
  }

  deleteMeal(meal: MealModel): void {
    const self = this;
    const dialogRef = this.dialog.open(MealDeleteComponent, {
      width: '250px',
      data: {
        header: `Remove meak ${meal.recipe.name}`,
        message: `Do you want remove ${meal.recipe.name}?`,
        delete: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: DialogDeleteData) => {
      if (result.delete) {
        self.mealClientService
          .delete(meal.id)
          .subscribe((b) => self.refreashMeals());
      }
    });
  }
}
