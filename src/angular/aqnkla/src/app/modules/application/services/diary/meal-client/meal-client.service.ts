import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network-client/network-client.service';
import { MealModel } from '../../../models/diary.model';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class MealClientService extends NetworkClientService<MealModel> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'meals');
  }

  getMeals(date: Date): MealModel[] {
    return [];
  }
}
