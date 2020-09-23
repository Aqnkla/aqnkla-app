import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private $apiHost = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  get(controller: string): Observable<object> {
    const resp = this.httpClient.get(`${this.$apiHost}/${controller}`);
    return resp;
  }

  post(controller: string, body: any): Observable<object> {
    const resp = this.httpClient.post(
      `${this.$apiHost}/${controller}`,
      body
    );
    return resp;
  }

  put(controller: string, body: any): Observable<object> {
    const resp = this.httpClient.put(
      `${this.$apiHost}/${controller}`,
      body
    );
    return resp;
  }

  delete(controller: string): Observable<object> {
    const resp = this.httpClient.delete(`${this.$apiHost}/${controller}`);
    return resp;
  }
}
