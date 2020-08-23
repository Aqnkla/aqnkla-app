import { TestBed } from '@angular/core/testing';

import { ReciptClientService } from './recipt-client.service';

describe('ReciptClientService', () => {
  let service: ReciptClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
