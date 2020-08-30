import { Component, OnInit } from '@angular/core';
import { DateHelper } from './../../helpers/date.helper';
import { ActivatedRoute } from '@angular/router';
import { DiaryDayModel, MealModel } from './../../../../models/diary.model';
import { DiaryService } from './../../../../services/diary/diary/diary.service';
import { MealClientService } from 'src/app/modules/application/services/diary/meal-client/meal-client.service';
import { RecipeClientService } from 'src/app/modules/application/services/recipe/recipe-client/recipe-client.service';

@Component({
  selector: 'aqn-diary-day',
  templateUrl: './diary-day.component.html',
  styleUrls: ['./diary-day.component.scss'],
})
export class DiaryDayComponent implements OnInit {
  currentDay: Date;
  diaryDayModel: DiaryDayModel;
  isAddMealActive: boolean;

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
    private recipeClientService: RecipeClientService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.date) {
        this.currentDay = DateHelper.getDate(params.date);
      } else {
        this.currentDay = new Date();
      }
      this.diaryDayModel = this.diaryService.getDiaryModel(this.currentDay);
      console.log(params);
    });
  }

  ngOnInit(): void {
    this.diaryDayModel = this.diaryService.getDiaryModel(this.currentDay);
  }

  addMeal(): void {
    this.isAddMealActive = true;
  }

  addMealConfirm(): void {
    this.isAddMealActive = false;
    this.recipeClientService.getAll().subscribe((b) => {
      const meal = new MealModel();
      meal.dateTime = this.currentDay;
      meal.recipe = b[0];
      meal.ingredients = b[0].ingredients;
      this.mealClientService
        .add(meal)
        .subscribe((b) => console.log(b.dateTime));
      console.log(meal);
    });
  }

  addMealCancel(): void {
    this.isAddMealActive = false;
  }
}
