import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAllerganComponent } from './item-allergan.component';

describe('ItemAllerganComponent', () => {
  let component: ItemAllerganComponent;
  let fixture: ComponentFixture<ItemAllerganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAllerganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAllerganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
