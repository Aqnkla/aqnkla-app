import { TestBed } from '@angular/core/testing';

import { RecipeClientService } from './recipe-client.service';

describe('RecipeClientService', () => {
  let service: RecipeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
