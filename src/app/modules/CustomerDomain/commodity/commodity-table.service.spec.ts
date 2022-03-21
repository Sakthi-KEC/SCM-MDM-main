import { TestBed } from '@angular/core/testing';

import { CommodityTableService } from './commodity-table.service';
import { HttpClientModule } from '@angular/common/http';
describe('CommodityTableService', () => {
  let service: CommodityTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(CommodityTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
