import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassticketsComponent } from './passtickets.component';

describe('PassticketsComponent', () => {
  let component: PassticketsComponent;
  let fixture: ComponentFixture<PassticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
