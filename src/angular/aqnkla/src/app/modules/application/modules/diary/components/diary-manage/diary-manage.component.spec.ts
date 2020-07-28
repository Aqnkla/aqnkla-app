import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryManageComponent } from './diary-manage.component';

describe('DiaryManageComponent', () => {
  let component: DiaryManageComponent;
  let fixture: ComponentFixture<DiaryManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
