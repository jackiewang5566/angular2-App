/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BpaComponent } from './bpa.component';

describe('BpaComponent', () => {
  let component: BpaComponent;
  let fixture: ComponentFixture<BpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
