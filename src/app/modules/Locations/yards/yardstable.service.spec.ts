import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { YardsTableService } from './yardstable.service';

describe('YardstableService', () => {
  let service: YardsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(YardsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
