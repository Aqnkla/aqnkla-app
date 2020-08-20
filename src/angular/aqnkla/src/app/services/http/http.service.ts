import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(contoller: string): Observable<object> {
    const resp = this.httpClient.get(`http://localhost:3000/${contoller}`);
    return resp;
  }

  post(contoller: string, body: any): Observable<object> {
    const resp = this.httpClient.post(`http://localhost:3000/${contoller}`, body);
    return resp;
  }

  put(contoller: string, body: any): Observable<object> {
    const resp = this.httpClient.put(`http://localhost:3000/${contoller}`, body);
    return resp;
  }

  delete(contoller: string): Observable<object> {
    const resp = this.httpClient.delete(`http://localhost:3000/${contoller}`);
    return resp;
  }
}
