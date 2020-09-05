import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupMenuComponent } from './group-menu.component';

describe('GroupMenuComponent', () => {
  let component: GroupMenuComponent;
  let fixture: ComponentFixture<GroupMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GroupMenuComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
