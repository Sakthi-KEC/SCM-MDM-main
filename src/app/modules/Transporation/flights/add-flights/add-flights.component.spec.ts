import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { AddFlightsComponent } from './add-flights.component';
import { DatePipe } from '@angular/common';

describe('AddFlightsComponent', () => {
  let component: AddFlightsComponent;
  let fixture: ComponentFixture<AddFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule, RouterModule,HttpClientTestingModule,HttpClientModule,FormsModule, ReactiveFormsModule,MatSlideToggleModule],
      declarations: [ AddFlightsComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
