import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network-client/network-client.service';
import { MealModel } from '../../../models/diary.model';
import { HttpService } from 'src/app/services/http/http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
