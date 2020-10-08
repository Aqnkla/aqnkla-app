import { RecipeViewModel } from 'src/app/models/api/aqnkla-food';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NetworkSearchClientService } from 'src/app/services/network/clients/network-search-client/network-search-client.service';
import { HttpService } from 'src/app/services/network/http/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeSearchService extends NetworkSearchClientService<
  RecipeViewModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'food/recipe');
  }

  getByName(value: string): Observable<RecipeViewModel[]> {
    const url = `${this.apiRoute}?q=${value}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as RecipeViewModel[]));
  }
}
