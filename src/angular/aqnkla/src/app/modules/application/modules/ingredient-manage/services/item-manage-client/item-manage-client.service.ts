import { Injectable } from '@angular/core';
import { NetworkClientService } from '../../../../../../services/network-client-manage/network-client-manage.service';
import { IngredientItemModel } from '../../../../common-modules/food/models/ingredient-item.model';
import { HttpService } from '../../../../../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ItemClientService extends NetworkClientService<
  IngredientItemModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'items');
  }
}
