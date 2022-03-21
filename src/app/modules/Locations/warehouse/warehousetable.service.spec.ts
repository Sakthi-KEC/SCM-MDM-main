import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WarehouseTableService } from './warehousetable.service';

describe('WarehousetableService', () => {
  let service: WarehouseTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(WarehouseTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
