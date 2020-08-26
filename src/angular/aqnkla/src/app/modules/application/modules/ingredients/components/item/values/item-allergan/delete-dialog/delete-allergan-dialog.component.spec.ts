import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAllerganDialogComponent } from './delete-allergan-dialog.component';


describe('DeleteAllerganDialogComponent', () => {
  let component: DeleteAllerganDialogComponent;
  let fixture: ComponentFixture<DeleteAllerganDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllerganDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllerganDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
