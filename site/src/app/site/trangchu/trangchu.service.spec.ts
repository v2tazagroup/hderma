/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrangchuService } from './trangchu.service';

describe('Service: Trangchu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrangchuService]
    });
  });

  it('should ...', inject([TrangchuService], (service: TrangchuService) => {
    expect(service).toBeTruthy();
  }));
});
