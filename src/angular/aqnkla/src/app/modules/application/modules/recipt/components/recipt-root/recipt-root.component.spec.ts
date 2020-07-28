import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptRootComponent } from './recipt-root.component';

describe('ReciptRootComponent', () => {
  let component: ReciptRootComponent;
  let fixture: ComponentFixture<ReciptRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
