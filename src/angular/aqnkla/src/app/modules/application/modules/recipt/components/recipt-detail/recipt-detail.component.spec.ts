import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptDetailComponent } from './recipt-detail.component';

describe('ReciptDetailComponent', () => {
  let component: ReciptDetailComponent;
  let fixture: ComponentFixture<ReciptDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
