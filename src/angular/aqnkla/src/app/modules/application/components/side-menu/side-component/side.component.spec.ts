import { SideComponent } from './side.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('SideComponent', () => {
  let component: SideComponent;
  let fixture: ComponentFixture<SideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
