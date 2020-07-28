import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsRootComponent } from './ingredients-root.component';

describe('IngredientsRootComponent', () => {
  let component: IngredientsRootComponent;
  let fixture: ComponentFixture<IngredientsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
