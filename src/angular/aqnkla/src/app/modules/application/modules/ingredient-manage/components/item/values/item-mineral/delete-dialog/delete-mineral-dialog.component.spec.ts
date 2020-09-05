import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteMineralDialogComponent } from './delete-mineral-dialog.component';

describe('DeleteMineralDialogComponent', () => {
  let component: DeleteMineralDialogComponent;
  let fixture: ComponentFixture<DeleteMineralDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteMineralDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMineralDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
