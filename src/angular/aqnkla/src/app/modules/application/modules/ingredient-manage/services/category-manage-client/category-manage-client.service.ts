import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { NetworkClientService } from 'src/app/services/network-client-manage/network-client-manage.service';
import { IngredientCategoryModel } from 'src/app/modules/application/common-modules/food/models/ingredient-category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryClientService extends NetworkClientService<
  IngredientCategoryModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'categories');
  }
}
