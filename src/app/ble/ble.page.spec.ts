import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlePage } from './ble.page';

describe('BlePage', () => {
  let component: BlePage;
  let fixture: ComponentFixture<BlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
