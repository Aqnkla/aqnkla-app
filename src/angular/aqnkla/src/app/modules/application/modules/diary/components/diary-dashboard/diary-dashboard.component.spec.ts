import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiaryDashboardComponent } from './diary-dashboard.component';

describe('DiaryDashboardComponent', () => {
  let component: DiaryDashboardComponent;
  let fixture: ComponentFixture<DiaryDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DiaryDashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
