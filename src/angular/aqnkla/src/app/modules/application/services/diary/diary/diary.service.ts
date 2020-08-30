import { Injectable } from '@angular/core';
import { MealClientService } from '../meal-client/meal-client.service';
import { DiaryDayModel } from '../../../models/diary.model';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor(private mealClientService: MealClientService) {}

  getDiaryModel(date: Date): DiaryDayModel {
    const meals = this.mealClientService.getMeals(date);
    const day = new DiaryDayModel(date);
    day.meals = meals;
    return day;
  }
}
