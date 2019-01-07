import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityChartsComponent } from './charity-charts.component';

describe('CharityChartsComponent', () => {
  let component: CharityChartsComponent;
  let fixture: ComponentFixture<CharityChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
