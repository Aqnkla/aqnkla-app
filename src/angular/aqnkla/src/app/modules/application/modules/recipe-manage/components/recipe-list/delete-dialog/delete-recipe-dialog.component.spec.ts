import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteRecipeDialogComponent } from './delete-recipe-dialog.component';

describe('DeleteRecipeDialogComponent', () => {
  let component: DeleteRecipeDialogComponent;
  let fixture: ComponentFixture<DeleteRecipeDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteRecipeDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecipeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
