import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<object> {
    const resp = this.httpClient.get('http://localhost:3000/teams');
    return resp;
  }
}
