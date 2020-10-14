import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailValuesComponent } from './item-detail-values.component';

describe('ItemDetailValuesComponent', () => {
  let component: ItemDetailValuesComponent;
  let fixture: ComponentFixture<ItemDetailValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
