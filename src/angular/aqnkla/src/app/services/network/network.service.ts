import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor() {}

  get(): string {
    return 'test';
  }
}
