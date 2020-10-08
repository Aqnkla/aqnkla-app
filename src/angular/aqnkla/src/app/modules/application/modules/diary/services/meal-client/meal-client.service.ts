import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MealModel } from '../../models/diary.model';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class MealClientService extends NetworkClientService<MealModel> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'food/meal');
  }

  getByDate(dateNumber: number): Observable<MealModel[]> {
    const url = `${this.apiRoute}?dateNumber=${dateNumber}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as MealModel[]));
  }
}
