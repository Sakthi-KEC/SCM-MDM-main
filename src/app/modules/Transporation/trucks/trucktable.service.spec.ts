import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TruckstableService } from './trucktable.service';

describe('TrucktableService', () => {
  let service: TruckstableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(TruckstableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
