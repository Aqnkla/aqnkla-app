import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientsDashboardComponent } from './ingridients-dashboard.component';

describe('IngridientsDashboardComponent', () => {
  let component: IngridientsDashboardComponent;
  let fixture: ComponentFixture<IngridientsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngridientsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngridientsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
