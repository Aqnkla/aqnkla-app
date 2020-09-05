import { TestBed } from '@angular/core/testing';

import { NetworkSearchClientService } from './network-search-client.service';

describe('NetworkSearchClientService', () => {
  let service: NetworkSearchClientService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkSearchClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
