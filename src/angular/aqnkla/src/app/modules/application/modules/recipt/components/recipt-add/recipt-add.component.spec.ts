import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptAddComponent } from './recipt-add.component';

describe('ReciptAddComponent', () => {
  let component: ReciptAddComponent;
  let fixture: ComponentFixture<ReciptAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
