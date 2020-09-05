import { Injectable } from '@angular/core';
import { IngredientItemModel, IngredientItemControllerInfo } from '../../../../common-modules/food/models/ingredient-item.model';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';

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
