import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MineralComponent } from './mineral.component';

describe('MineralComponent', () => {
  let component: MineralComponent;
  let fixture: ComponentFixture<MineralComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MineralComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
