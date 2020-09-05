import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccountRootComponent } from './account-root.component';

describe('AuthenticationRootComponent', () => {
  let component: AccountRootComponent;
  let fixture: ComponentFixture<AccountRootComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccountRootComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
