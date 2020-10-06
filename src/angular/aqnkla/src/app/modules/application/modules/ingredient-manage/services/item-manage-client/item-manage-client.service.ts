import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';
import { IngredientItemModel } from 'src/app/modules/application/common-modules/food/models/ingredient/ingredient-item.model';
import { IngredientItemControllerInfo } from "src/app/modules/application/common-modules/food/models/ingredient/IngredientItemControllerInfo";

@Injectable({
  providedIn: 'root',
})
export class ItemClientService extends NetworkClientService<
  IngredientItemModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, new IngredientItemControllerInfo());
  }
}
