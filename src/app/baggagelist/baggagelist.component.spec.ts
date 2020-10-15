import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggagelistComponent } from './baggagelist.component';

describe('BaggagelistComponent', () => {
  let component: BaggagelistComponent;
  let fixture: ComponentFixture<BaggagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
