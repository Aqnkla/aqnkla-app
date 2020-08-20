import { Injectable } from '@angular/core';
import { IngredientItemModel } from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './../../../../../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemClientService {

  constructor(private networkService: HttpService) { }
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
