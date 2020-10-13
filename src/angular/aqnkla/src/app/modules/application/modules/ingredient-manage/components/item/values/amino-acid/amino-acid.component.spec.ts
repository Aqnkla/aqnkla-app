import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminoAcidComponent } from './amino-acid.component';

describe('AminoAcidComponent', () => {
  let component: AminoAcidComponent;
  let fixture: ComponentFixture<AminoAcidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AminoAcidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AminoAcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
