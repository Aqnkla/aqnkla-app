import { HttpService } from '../../http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControllerInfo } from 'src/app/models/controller-into';

export abstract class NetworkClientService<T> {
  constructor(
    protected networkService: HttpService,
    protected controllerInfo: ControllerInfo
  ) {}

  add(value: T): Observable<T> {
    console.log('add', value);
    const response = this.networkService.post(
      this.controllerInfo.controllerName,
      value
    );
    return response.pipe(
      map((b) => {
        return b as any;
      })
    );
  }

  update(id: string, value: T): Observable<T> {
    const url = `${this.controllerInfo.controllerName}/${id}`;
    const response = this.networkService.put(url, value);
    return response.pipe(map((b) => b as any));
  }
  get(id: string): Observable<T> {
    const url = `${this.controllerInfo.controllerName}/${id}`;
    const response = this.networkService.get(url);
    return response.pipe(map((b) => b as any));
  }

  getAll(): Observable<T[]> {
    const response = this.networkService.get(
      this.controllerInfo.controllerName
    );
    return response.pipe(map((b) => b as T[]));
  }

  delete(id: string): Observable<any> {
    const url = `${this.controllerInfo.controllerName}/${id}`;
    const response = this.networkService.delete(url);
    return response;
  }
}
