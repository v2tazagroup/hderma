/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonhangChitietComponent } from './donhang-chitiet.component';

describe('DonhangChitietComponent', () => {
  let component: DonhangChitietComponent;
  let fixture: ComponentFixture<DonhangChitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonhangChitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonhangChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
