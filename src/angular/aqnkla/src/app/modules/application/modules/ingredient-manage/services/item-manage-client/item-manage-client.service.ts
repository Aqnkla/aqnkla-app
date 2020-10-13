import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  IngredientItemViewModel,
  ValuesViewModel,
} from 'src/app/models/api/aqnkla-food';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ItemClientService extends NetworkClientService<
  IngredientItemViewModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'food/ingredient/item');
  }

  allDataValues(): Observable<ValuesViewModel> {
    return this.networkService
      .get(`${this.apiRoute}/all-data-values`)
      .pipe(map((b) => b as ValuesViewModel));
  }
}
