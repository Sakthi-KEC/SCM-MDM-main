import { DatePipe } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddcommoditygroupComponent } from './addcommoditygroup.component';

describe('AddcommoditygroupComponent', () => {
  let component: AddcommoditygroupComponent;
  let fixture: ComponentFixture<AddcommoditygroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ AddcommoditygroupComponent ],
      providers: [FormBuilder,HttpClient,HttpHandler,DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommoditygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
