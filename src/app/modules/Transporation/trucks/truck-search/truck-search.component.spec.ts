import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TruckSearchComponent } from './truck-search.component';

describe('TruckSearchComponent', () => {
  let component: TruckSearchComponent;
  let fixture: ComponentFixture<TruckSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule,RouterTestingModule,FormsModule, ReactiveFormsModule,HttpClientModule,MatDialogModule],
      declarations: [ TruckSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
