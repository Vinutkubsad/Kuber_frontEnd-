import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityTablesComponent } from './charity-tables.component';

describe('CharityTablesComponent', () => {
  let component: CharityTablesComponent;
  let fixture: ComponentFixture<CharityTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
