import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
//import { RouterModule } from '@angular/router';
import { CurrencySearchComponent } from './currency-search.component';

describe('CurrencySearchComponent', () => {
  let component: CurrencySearchComponent;
  let fixture: ComponentFixture<CurrencySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule, ReactiveFormsModule,MatDialogModule],
      declarations: [CurrencySearchComponent],
      providers: [HttpClient,HttpHandler]
      
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
