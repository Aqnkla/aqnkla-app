import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class NetworkSearchClientService<T> {
  constructor(
    protected networkService: HttpService,
    protected apiRoute: string
  ) {}

  getAll(): Observable<T[]> {
    const response = this.networkService.get(
      this.apiRoute
    );
    return response.pipe(map((b) => b as T[]));
  }
}
