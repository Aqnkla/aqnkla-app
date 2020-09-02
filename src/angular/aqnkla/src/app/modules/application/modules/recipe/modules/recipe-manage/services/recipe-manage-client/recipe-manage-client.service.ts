import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network-client/network-client.service';
import { RecipeModel } from '../../../models/ingredient.model';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeClientService   extends NetworkClientService<
RecipeModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'recipes');
  }
}
