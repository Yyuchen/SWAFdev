import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomePage } from './wellcome.page';

describe('WellcomePage', () => {
  let component: WellcomePage;
  let fixture: ComponentFixture<WellcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
