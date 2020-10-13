import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbohydrateComponent } from './carbohydrate.component';

describe('CarbohydrateComponent', () => {
  let component: CarbohydrateComponent;
  let fixture: ComponentFixture<CarbohydrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbohydrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbohydrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
