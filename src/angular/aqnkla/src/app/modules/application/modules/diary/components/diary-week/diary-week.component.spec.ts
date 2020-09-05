import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiaryWeekComponent } from './diary-week.component';

describe('DiaryWeekComponent', () => {
  let component: DiaryWeekComponent;
  let fixture: ComponentFixture<DiaryWeekComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DiaryWeekComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
