import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IngredientsDashboardComponent } from './ingredients-dashboard.component';

describe('IngredientsDashboardComponent', () => {
  let component: IngredientsDashboardComponent;
  let fixture: ComponentFixture<IngredientsDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IngredientsDashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
