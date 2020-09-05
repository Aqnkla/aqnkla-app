import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiaryManageComponent } from './diary-manage.component';

describe('DiaryManageComponent', () => {
  let component: DiaryManageComponent;
  let fixture: ComponentFixture<DiaryManageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DiaryManageComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
