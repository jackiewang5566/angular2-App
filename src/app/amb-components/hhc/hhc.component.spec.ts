/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HhcComponent } from './hhc.component';

describe('HhcComponent', () => {
  let component: HhcComponent;
  let fixture: ComponentFixture<HhcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
