import { TestBed } from '@angular/core/testing';

import { CompetencesdtoService } from './competencesdto.service';

describe('CompetencesdtoService', () => {
  let service: CompetencesdtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencesdtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
