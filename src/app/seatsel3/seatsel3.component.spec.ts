import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seatsel3Component } from './seatsel3.component';

describe('Seatsel3Component', () => {
  let component: Seatsel3Component;
  let fixture: ComponentFixture<Seatsel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seatsel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seatsel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
