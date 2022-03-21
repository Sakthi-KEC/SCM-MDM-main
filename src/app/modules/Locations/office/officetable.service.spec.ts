import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OfficeTableService } from './officetable.service';

describe('OfficetableService', () => {
  let service: OfficeTableService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(OfficeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
