import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DeleteAllerganDialogComponent } from './delete-allergen-dialog.component';

describe('DeleteAllerganDialogComponent', () => {
  let component: DeleteAllerganDialogComponent;
  let fixture: ComponentFixture<DeleteAllerganDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteAllerganDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllerganDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
