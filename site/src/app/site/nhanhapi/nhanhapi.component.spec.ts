/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhanhapiComponent } from './nhanhapi.component';

describe('NhanhapiComponent', () => {
  let component: NhanhapiComponent;
  let fixture: ComponentFixture<NhanhapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanhapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanhapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
