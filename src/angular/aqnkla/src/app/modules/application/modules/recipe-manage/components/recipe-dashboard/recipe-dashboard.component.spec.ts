import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeDashboardComponent } from './recipe-dashboard.component';

describe('RecipeDashboardComponent', () => {
  let component: RecipeDashboardComponent;
  let fixture: ComponentFixture<RecipeDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RecipeDashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
