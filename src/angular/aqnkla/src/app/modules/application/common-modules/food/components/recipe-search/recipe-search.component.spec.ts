import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeSearchComponent } from './recipe-search.component';

describe('RecipeSearchComponent', () => {
  let component: RecipeSearchComponent;
  let fixture: ComponentFixture<RecipeSearchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RecipeSearchComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
