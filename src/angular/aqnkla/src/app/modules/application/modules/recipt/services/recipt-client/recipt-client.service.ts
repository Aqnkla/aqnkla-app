import { Injectable } from '@angular/core';
import { NetworkClientService } from 'src/app/services/network-client/network-client.service';
import { ReciptModel } from '../../../ingredients/models/ingredient.model';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReciptClientService   extends NetworkClientService<
ReciptModel
> {
  constructor(protected networkService: HttpService) {
    super(networkService, 'recipts');
  }
}
