import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeSummaryComponent } from './recipe-summary.component';

describe('RecipeSummaryComponent', () => {
  let component: RecipeSummaryComponent;
  let fixture: ComponentFixture<RecipeSummaryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RecipeSummaryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
