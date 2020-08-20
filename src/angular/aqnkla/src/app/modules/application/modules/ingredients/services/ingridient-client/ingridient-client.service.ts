import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import {
  IngredientCategoryModel,
  IngredientItemModel,
} from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IngridientClientService {
  constructor(private networkService: NetworkService) {}

  addCategory(
    value: IngredientCategoryModel
  ): Observable<IngredientCategoryModel> {
    const url = 'categories';
    const response = this.networkService.post(url, value);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }

  updateCategory(
    value: IngredientCategoryModel
  ): Observable<IngredientCategoryModel> {
    const url = 'categories';
    const response = this.networkService.post('', value);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }
  getCategory(id: string): Observable<IngredientCategoryModel> {
    const url = 'categories';
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }

  getCategories(): Observable<IngredientCategoryModel[]> {
    const url = 'categories';
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientCategoryModel[]));
  }

  addItem(value: IngredientItemModel): Observable<IngredientItemModel> {
    const url = '';
    const response = this.networkService.post('', value);
    return response.pipe(map((b) => b as IngredientItemModel));
  }

  updateItem(value: IngredientItemModel): Observable<IngredientItemModel> {
    const url = '';
    const response = this.networkService.post('', value);
    return response.pipe(map((b) => b as IngredientItemModel));
  }

  getItem(id: string): Observable<IngredientItemModel> {
    const url = '';
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientItemModel));
  }

  getItems(): Observable<IngredientItemModel[]> {
    const url = '';
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientItemModel[]));
  }
}
