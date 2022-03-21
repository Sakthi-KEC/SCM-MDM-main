import { TestBed } from '@angular/core/testing';
import { UnnumbertableService } from './unnumbertable.service';
import { HttpClientModule } from '@angular/common/http';
describe('UnnumbertableService', () => {
  let service: UnnumbertableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(UnnumbertableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
