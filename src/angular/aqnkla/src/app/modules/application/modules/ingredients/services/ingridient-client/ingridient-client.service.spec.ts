import { TestBed } from '@angular/core/testing';

import { IngridientClientService } from './ingridient-client.service';

describe('IngridientClientService', () => {
  let service: IngridientClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngridientClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
