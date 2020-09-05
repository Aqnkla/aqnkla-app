import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemMineralComponent } from './item-mineral.component';

describe('ItemMineralComponent', () => {
  let component: ItemMineralComponent;
  let fixture: ComponentFixture<ItemMineralComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ItemMineralComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
