import { NetworkClientService } from '../../../../../../services/network-client-manage/network-client-manage.service';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MealModel } from '../../models/diary.model';

@Injectable({
  providedIn: 'root',
})
export class MealClientService extends NetworkClientService<MealModel> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'meals');
  }

  getByDate(dateNumber: number): Observable<MealModel[]> {
    const url = `${this.controller}?dateNumber=${dateNumber}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as MealModel[]));
  }
}
