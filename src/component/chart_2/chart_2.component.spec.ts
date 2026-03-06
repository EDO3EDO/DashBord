/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chart_2Component } from './chart_2.component';

describe('Chart_2Component', () => {
  let component: Chart_2Component;
  let fixture: ComponentFixture<Chart_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
