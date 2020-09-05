import { IngredientCategoryControllerInfo } from './../../../../common-modules/food/models/ingredient-category.model';
import { Injectable } from '@angular/core';
import { IngredientCategoryModel } from 'src/app/modules/application/common-modules/food/models/ingredient-category.model';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryClientService extends NetworkClientService<
  IngredientCategoryModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, new IngredientCategoryControllerInfo());
  }
}
