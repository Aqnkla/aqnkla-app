import { Injectable } from '@angular/core';
import { NetworkSearchClientService } from 'src/app/services/network/clients/network-search-client/network-search-client.service';
import { HttpService } from 'src/app/services/network/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IngredientItemControllerInfo } from '../../models/ingredient/IngredientItemControllerInfo';
import { IngredientItemViewModel } from '../../models/api/aqnkla-food';

@Injectable({
  providedIn: 'root',
})
export class IngredientSearchService extends NetworkSearchClientService<
IngredientItemViewModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, new IngredientItemControllerInfo());
  }

  getByName(value: string): Observable<IngredientItemViewModel[]> {
    const url = `${this.controllerInfo.controllerName}?q=${value}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientItemViewModel[]));
  }
}
