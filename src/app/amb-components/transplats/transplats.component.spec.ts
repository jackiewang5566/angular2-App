/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransplatsComponent } from './transplats.component';

describe('TransplatsComponent', () => {
  let component: TransplatsComponent;
  let fixture: ComponentFixture<TransplatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransplatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
