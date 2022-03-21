import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { flightstableService } from './flightstable.service';

describe('FlightstableService', () => {
  let service: flightstableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(flightstableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
