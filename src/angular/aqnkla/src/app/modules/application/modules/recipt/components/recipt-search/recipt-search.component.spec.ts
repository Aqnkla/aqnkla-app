import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptSearchComponent } from './recipt-search.component';

describe('ReciptSearchComponent', () => {
  let component: ReciptSearchComponent;
  let fixture: ComponentFixture<ReciptSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
