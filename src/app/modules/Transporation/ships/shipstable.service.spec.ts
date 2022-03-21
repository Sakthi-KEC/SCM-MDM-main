import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ShipstableService } from './shipstable.service';

describe('ShipstableService', () => {
  let service: ShipstableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(ShipstableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
