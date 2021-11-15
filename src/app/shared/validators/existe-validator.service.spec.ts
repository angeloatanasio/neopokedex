import { TestBed } from '@angular/core/testing';

import { ExisteValidatorService } from './existe-validator.service';

describe('ExisteParNomValidatorService', () => {
  let service: ExisteValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExisteValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
