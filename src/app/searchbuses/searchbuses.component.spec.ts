import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbusesComponent } from './searchbuses.component';

describe('SearchbusesComponent', () => {
  let component: SearchbusesComponent;
  let fixture: ComponentFixture<SearchbusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
