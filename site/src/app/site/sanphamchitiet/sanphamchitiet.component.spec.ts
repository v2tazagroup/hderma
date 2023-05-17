/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanphamchitietComponent } from './sanphamchitiet.component';

describe('SanphamchitietComponent', () => {
  let component: SanphamchitietComponent;
  let fixture: ComponentFixture<SanphamchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
