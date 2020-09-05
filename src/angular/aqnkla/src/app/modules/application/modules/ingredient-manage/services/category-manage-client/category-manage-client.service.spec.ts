import { TestBed } from '@angular/core/testing';
import { CategoryClientService } from './category-manage-client.service';

describe('CategoryClientService', () => {
  let service: CategoryClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
