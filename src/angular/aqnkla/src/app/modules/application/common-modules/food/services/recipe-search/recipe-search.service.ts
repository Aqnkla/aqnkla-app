import { RecipeControllerInfo } from './../../models/recipe.model';
import { Injectable } from '@angular/core';
import { NetworkSearchClientService } from 'src/app/services/network/clients/network-search-client/network-search-client.service';
import { RecipeModel } from '../../models/recipe.model';
import { HttpService } from 'src/app/services/network/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeSearchService extends NetworkSearchClientService<
  RecipeModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, new RecipeControllerInfo());
  }
}
