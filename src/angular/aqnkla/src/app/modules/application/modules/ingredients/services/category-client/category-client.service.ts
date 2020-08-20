import { Injectable } from '@angular/core';
import { IngredientCategoryModel } from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './../../../../../../services/http/http.service';
import { NetworkClientService } from './../../../../../../services/network-client/network-client.service';

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
