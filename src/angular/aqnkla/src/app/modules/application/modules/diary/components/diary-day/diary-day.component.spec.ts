import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryDayComponent } from './diary-day.component';

describe('DiaryDayComponent', () => {
  let component: DiaryDayComponent;
  let fixture: ComponentFixture<DiaryDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
