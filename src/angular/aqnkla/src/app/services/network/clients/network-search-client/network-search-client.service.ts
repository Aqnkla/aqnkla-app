import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { map } from 'rxjs/operators';
import { ControllerInfo } from 'src/app/models/controller-into';

@Injectable({
  providedIn: 'root',
})
export abstract class NetworkSearchClientService<T> {
  protected readonly controller: ControllerInfo;
  constructor(
    protected networkService: HttpService,
    protected controllerInfo: ControllerInfo
  ) {}

  getAll(): Observable<T[]> {
    const response = this.networkService.get(
      this.controllerInfo.controllerName
    );
    return response.pipe(map((b) => b as T[]));
  }
}
