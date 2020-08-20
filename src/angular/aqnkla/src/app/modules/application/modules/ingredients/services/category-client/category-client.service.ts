import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import { IngredientCategoryModel } from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryClientService {
  constructor(private networkService: NetworkService) {}

  add(value: IngredientCategoryModel): Observable<IngredientCategoryModel> {
    const url = 'categories';
    const response = this.networkService.post(url, value);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }

  update(value: IngredientCategoryModel): Observable<IngredientCategoryModel> {
    const url = `categories/${value.id}`;
    const response = this.networkService.put(url, value);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }
  get(id: string): Observable<IngredientCategoryModel> {
    const url = `categories/${id}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientCategoryModel));
  }

  getAll(): Observable<IngredientCategoryModel[]> {
    const url = 'categories';
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as IngredientCategoryModel[]));
  }

  delete(id: string): Observable<any> {
    const url = `categories/${id}`;
    const response = this.networkService.delete(url);
    return response;
  }
}
