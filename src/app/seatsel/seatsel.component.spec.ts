import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatselComponent } from './seatsel.component';

describe('SeatselComponent', () => {
  let component: SeatselComponent;
  let fixture: ComponentFixture<SeatselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
