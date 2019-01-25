import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxPage } from './jeux.page';

describe('JeuxPage', () => {
  let component: JeuxPage;
  let fixture: ComponentFixture<JeuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
