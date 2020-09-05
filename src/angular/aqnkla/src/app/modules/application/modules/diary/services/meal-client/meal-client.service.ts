import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MealModel, MealControllerInfo } from '../../models/diary.model';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class MealClientService extends NetworkClientService<MealModel> {
  constructor(protected networkService: HttpService) {
    super(networkService, new MealControllerInfo());
  }

  getByDate(dateNumber: number): Observable<MealModel[]> {
    const url = `${this.controllerInfo.controllerName}?dateNumber=${dateNumber}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as MealModel[]));
  }
}
