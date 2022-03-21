import { DatePipe } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddRoundingOffComponent } from './add-rounding-off.component';

describe('AddRoundingOffComponent', () => {
  let component: AddRoundingOffComponent;
  let fixture: ComponentFixture<AddRoundingOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule, ReactiveFormsModule],
      declarations: [AddRoundingOffComponent],
      providers: [DatePipe,HttpClient,HttpHandler]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoundingOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
