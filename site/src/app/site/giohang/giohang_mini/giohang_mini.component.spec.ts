/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Giohang_miniComponent } from './giohang_mini.component';

describe('Giohang_miniComponent', () => {
  let component: Giohang_miniComponent;
  let fixture: ComponentFixture<Giohang_miniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Giohang_miniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Giohang_miniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
