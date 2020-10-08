import { IngredientItemViewModel } from './../../../../../../models/api/aqnkla-food';
import { Injectable } from '@angular/core';
import { NetworkSearchClientService } from 'src/app/services/network/clients/network-search-client/network-search-client.service';
import { HttpService } from 'src/app/services/network/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IngredientSearchService extends NetworkSearchClientService<
IngredientItemViewModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'food/search');
  }

  getByName(value: string): Observable<IngredientItemViewModel[]> {
    const url = `${this.apiRoute}?q=${value}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientItemViewModel[]));
  }
}
