import { TestBed } from '@angular/core/testing';

import { MealClientService } from './meal-client.service';

describe('MealClientService', () => {
  let service: MealClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
