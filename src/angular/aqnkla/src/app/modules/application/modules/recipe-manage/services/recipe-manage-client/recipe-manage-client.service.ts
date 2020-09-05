import { RecipeControllerInfo } from './../../../../common-modules/food/models/recipe.model';
import { RecipeModel } from '../../../../common-modules/food/models/recipe.model';
import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeClientService extends NetworkClientService<RecipeModel> {
  constructor(protected networkService: HttpService) {
    super(networkService, new RecipeControllerInfo());
  }
}
