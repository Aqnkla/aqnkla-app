import { HttpService } from '../../../../../../services/http/http.service';
import { NetworkClientService } from '../../../../../../services/network-client-manage/network-client-manage.service';
import { RecipeModel } from '../../../../common-modules/food/models/recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeClientService   extends NetworkClientService<
RecipeModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'recipes');
  }
}
