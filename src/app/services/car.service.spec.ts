/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarService } from './car.service';

describe('AeroplaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService]
    });
  });

  it('should ...', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
