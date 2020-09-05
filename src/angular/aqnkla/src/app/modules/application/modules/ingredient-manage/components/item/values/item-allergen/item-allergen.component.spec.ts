import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ItemAllergenComponent } from './item-allergen.component';

describe('ItemAllerganComponent', () => {
  let component: ItemAllergenComponent;
  let fixture: ComponentFixture<ItemAllergenComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ItemAllergenComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAllergenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
