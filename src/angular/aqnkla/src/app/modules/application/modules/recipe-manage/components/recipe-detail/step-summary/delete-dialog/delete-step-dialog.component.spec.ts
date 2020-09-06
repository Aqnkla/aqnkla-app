import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DeleteStepDialogComponent } from './delete-step-dialog.component';


describe('DeleteStepDialogComponent', () => {
  let component: DeleteStepDialogComponent;
  let fixture: ComponentFixture<DeleteStepDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteStepDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
