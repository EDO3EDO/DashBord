/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chart-3Component } from './Chart-3.component';

describe('Chart-3Component', () => {
  let component: Chart-3Component;
  let fixture: ComponentFixture<Chart-3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart-3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart-3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
