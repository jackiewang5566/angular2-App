/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorresponseComponent } from './corresponse.component';

describe('CorresponseComponent', () => {
  let component: CorresponseComponent;
  let fixture: ComponentFixture<CorresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
