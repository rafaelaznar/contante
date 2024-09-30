/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomIntegerGeneratorService } from './random-integer-generator.service';

describe('Service: RandomIntegerGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomIntegerGeneratorService]
    });
  });

  it('should ...', inject([RandomIntegerGeneratorService], (service: RandomIntegerGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
