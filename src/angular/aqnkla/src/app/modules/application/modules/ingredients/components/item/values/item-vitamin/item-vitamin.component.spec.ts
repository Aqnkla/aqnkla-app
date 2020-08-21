import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVitaminComponent } from './item-vitamin.component';

describe('ItemVitaminComponent', () => {
  let component: ItemVitaminComponent;
  let fixture: ComponentFixture<ItemVitaminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVitaminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVitaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
