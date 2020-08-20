import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class NetworkClientService<T> {
  protected readonly controller: string;
  constructor(protected networkService: HttpService, controller: string) {
    this.controller = controller;
  }

  add(value: T): Observable<T> {
    const response = this.networkService.post(this.controller, value);
    return response.pipe(
      map((b) => {
        return b as any;
      })
    );
  }

  update(id: string, value: T): Observable<T> {
    const url = `${this.controller}/${id}`;
    const response = this.networkService.put(url, value);
    return response.pipe(map((b) => b as any));
  }
  get(id: string): Observable<T> {
    const url = `${this.controller}/${id}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as any));
  }

  getAll(): Observable<T[]> {
    const url = 'categories';
    const response = this.networkService.get(this.controller);
    return response.pipe(map((b) => b as T[]));
  }

  delete(id: string): Observable<any> {
    const url = `${this.controller}/${id}`;
    const response = this.networkService.delete(url);
    return response;
  }
}
