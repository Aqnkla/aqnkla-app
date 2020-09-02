import { Injectable } from '@angular/core';
import { IngredientItemModel } from '../../../models/ingredient.model';
import { HttpService } from '../../../../../services/http/http.service';
import { NetworkClientService } from 'src/app/services/network-client/network-client.service';

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
