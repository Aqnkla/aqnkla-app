import { Injectable } from '@angular/core';
import { IngredientItemViewModel } from 'src/app/models/api/aqnkla-food';
import { NetworkClientService } from 'src/app/services/network/clients/network-client-manage/network-client-manage.service';
import { HttpService } from 'src/app/services/network/http/http.service';
@Injectable({
  providedIn: 'root',
})
export class ItemClientService extends NetworkClientService<
  IngredientItemViewModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'food/ingredient/item');
  }
}
