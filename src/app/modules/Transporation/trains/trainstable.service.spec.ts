import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TrainstableService } from './trainstable.service';

describe('TrainstableService', () => {
  let service: TrainstableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(TrainstableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
