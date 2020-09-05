import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DarkSwitchComponent } from './dark-switch.component';

describe('DarkSwitchComponent', () => {
  let component: DarkSwitchComponent;
  let fixture: ComponentFixture<DarkSwitchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DarkSwitchComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
