import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteCategoryDialogComponent } from './delete-recipe-item-dialog.component';

describe('DeleteCategoryDialogComponent', () => {
  let component: DeleteCategoryDialogComponent;
  let fixture: ComponentFixture<DeleteCategoryDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteCategoryDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
