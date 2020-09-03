import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private $apiHost = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  get(contoller: string): Observable<object> {
    const resp = this.httpClient.get(`${this.$apiHost}/${contoller}`);
    return resp;
  }

  post(contoller: string, body: any): Observable<object> {
    const resp = this.httpClient.post(
      `${this.$apiHost}/${contoller}`,
      body
    );
    return resp;
  }

  put(contoller: string, body: any): Observable<object> {
    const resp = this.httpClient.put(
      `${this.$apiHost}/${contoller}`,
      body
    );
    return resp;
  }

  delete(contoller: string): Observable<object> {
    const resp = this.httpClient.delete(`${this.$apiHost}/${contoller}`);
    return resp;
  }
}
