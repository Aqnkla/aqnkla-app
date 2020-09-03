import { Injectable } from '@angular/core';
import { MealClientService } from '../meal-client/meal-client.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiaryDayModel } from '../../models/diary.model';
import { DateHelper } from 'src/app/modules/application/helpers/common/date.helper';

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
