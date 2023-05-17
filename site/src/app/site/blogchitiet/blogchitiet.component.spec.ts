/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogchitietComponent } from './blogchitiet.component';

describe('BlogchitietComponent', () => {
  let component: BlogchitietComponent;
  let fixture: ComponentFixture<BlogchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
