import { TestBed } from '@angular/core/testing';
import { CurrencytableService } from './currencytable.service';
import { HttpClientModule } from '@angular/common/http';
describe('CurrencytableService', () => {
  let service: CurrencytableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(CurrencytableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
