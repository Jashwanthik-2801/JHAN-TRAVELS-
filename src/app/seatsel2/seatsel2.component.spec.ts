import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seatsel2Component } from './seatsel2.component';

describe('Seatsel2Component', () => {
  let component: Seatsel2Component;
  let fixture: ComponentFixture<Seatsel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seatsel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seatsel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
