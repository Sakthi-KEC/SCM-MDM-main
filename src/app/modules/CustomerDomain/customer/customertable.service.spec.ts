import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CustomerTableService } from './customertable.service';

describe('CustomertableService', () => {
  let service: CustomerTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(CustomerTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
