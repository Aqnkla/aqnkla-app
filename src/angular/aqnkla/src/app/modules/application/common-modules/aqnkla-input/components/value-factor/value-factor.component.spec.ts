import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFactorComponent } from './value-factor.component';

describe('ValueFactorComponent', () => {
  let component: ValueFactorComponent;
  let fixture: ComponentFixture<ValueFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
