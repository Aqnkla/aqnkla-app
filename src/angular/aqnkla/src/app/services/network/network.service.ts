import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<object> {
    const resp = this.httpClient.get('https://localhost:5001/monitor');
    return resp;
  }
}
