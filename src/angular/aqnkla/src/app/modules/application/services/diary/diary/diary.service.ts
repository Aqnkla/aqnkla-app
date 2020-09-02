import { Injectable } from '@angular/core';
import { MealClientService } from '../meal-client/meal-client.service';
import { DiaryDayModel } from '../../../models/diary.model';
import { DateHelper } from '../../../helpers/common/date.helper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor(private mealClientService: MealClientService) {}

  getDiaryModel(date: Date): Observable<DiaryDayModel> {
    const diary = this.mealClientService
      .getByDate(DateHelper.getDateNumber(date))
      .pipe(
        map((p) => {
          const day = new DiaryDayModel(date);
          day.meals = p;
          return day;
        })
      );
    return diary;
  }
}
