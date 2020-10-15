import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonuserhomeComponent } from './nonuserhome.component';

describe('NonuserhomeComponent', () => {
  let component: NonuserhomeComponent;
  let fixture: ComponentFixture<NonuserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonuserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonuserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
