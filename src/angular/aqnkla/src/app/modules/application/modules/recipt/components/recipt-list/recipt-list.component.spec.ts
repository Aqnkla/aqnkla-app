import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptListComponent } from './recipt-list.component';

describe('ReciptListComponent', () => {
  let component: ReciptListComponent;
  let fixture: ComponentFixture<ReciptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
