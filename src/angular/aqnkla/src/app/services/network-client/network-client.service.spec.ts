import { TestBed } from '@angular/core/testing';

import { NetworkClientService } from './network-client.service';

describe('NetworkClientService', () => {
  let service: NetworkClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
