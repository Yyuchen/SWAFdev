import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoJourPage } from './histo-jour.page';

describe('HistoJourPage', () => {
  let component: HistoJourPage;
  let fixture: ComponentFixture<HistoJourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoJourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoJourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
