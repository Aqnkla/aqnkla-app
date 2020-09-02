import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryRootComponent } from './diary-root.component';

describe('DiaryRootComponent', () => {
  let component: DiaryRootComponent;
  let fixture: ComponentFixture<DiaryRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
