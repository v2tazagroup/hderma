import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemetintucComponent } from './themetintuc.component';

describe('ThemetintucComponent', () => {
  let component: ThemetintucComponent;
  let fixture: ComponentFixture<ThemetintucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemetintucComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemetintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
