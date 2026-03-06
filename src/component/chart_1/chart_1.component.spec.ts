/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chart_1Component } from './chart_1.component';

describe('Chart_1Component', () => {
  let component: Chart_1Component;
  let fixture: ComponentFixture<Chart_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
