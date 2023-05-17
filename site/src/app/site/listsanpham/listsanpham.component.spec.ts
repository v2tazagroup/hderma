/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListsanphamComponent } from './listsanpham.component';

describe('ListsanphamComponent', () => {
  let component: ListsanphamComponent;
  let fixture: ComponentFixture<ListsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
