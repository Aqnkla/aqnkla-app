import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MealDeleteComponent } from './meal-delete.component';

describe('MealDeleteComponent', () => {
  let component: MealDeleteComponent;
  let fixture: ComponentFixture<MealDeleteComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MealDeleteComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
