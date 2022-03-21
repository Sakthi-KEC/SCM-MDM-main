import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddCurrencyConversionComponent } from './add-currency-conversion.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('AddCurrencyConversionComponent', () => {
  let component: AddCurrencyConversionComponent;
  let fixture: ComponentFixture<AddCurrencyConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule,ReactiveFormsModule,MatSlideToggleModule],
      declarations: [AddCurrencyConversionComponent],
      providers: [ DatePipe,HttpClient,HttpHandler]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
