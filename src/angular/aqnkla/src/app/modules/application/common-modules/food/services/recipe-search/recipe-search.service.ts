import { Observable } from 'rxjs';
import { RecipeControllerInfo } from '../../models/recipe/recipe.model';
import { Injectable } from '@angular/core';
import { NetworkSearchClientService } from 'src/app/services/network/clients/network-search-client/network-search-client.service';
import { RecipeModel } from '../../models/recipe/recipe.model';
import { HttpService } from 'src/app/services/network/http/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeSearchService extends NetworkSearchClientService<
  RecipeModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, new RecipeControllerInfo());
  }

  getByName(value: string): Observable<RecipeModel[]> {
    const url = `${this.controllerInfo.controllerName}?q=${value}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as RecipeModel[]));
  }
}
