import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractValueComponent } from './abstract-value.component';

describe('AbstractValueComponent', () => {
  let component: AbstractValueComponent;
  let fixture: ComponentFixture<AbstractValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
