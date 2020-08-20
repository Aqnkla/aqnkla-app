import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import {
  IngredientCategoryModel,
  IngredientItemModel,
} from '../../models/ingredient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngridientClientService {
  constructor(private networkService: NetworkService) {}

  addCategory(
    value: IngredientCategoryModel
  ): Observable<IngredientCategoryModel> {
    const response = this.networkService.post('', value);
    return response.pipe(map(b=>b.))
  }

  getCategory(id: string): Observable<IngredientCategoryModel> {}

  getCategories(): Observable<IngredientCategoryModel[]> {}

  addItem(value: IngredientItemModel): Observable<IngredientItemModel> {}

  getItem(id: string): Observable<IngredientItemModel> {}

  getItems(): Observable<IngredientItemModel[]> {}
}
