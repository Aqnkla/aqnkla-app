import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityItemSizeComponent } from './quantity-item-size.component';

describe('QuantityItemSizeComponent', () => {
  let component: QuantityItemSizeComponent;
  let fixture: ComponentFixture<QuantityItemSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityItemSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityItemSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
