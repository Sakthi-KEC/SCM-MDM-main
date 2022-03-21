import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TrainsComponent } from './trains.component';

describe('TrainsComponent', () => {
  let component: TrainsComponent;
  let fixture: ComponentFixture<TrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule,RouterTestingModule,FormsModule, ReactiveFormsModule,HttpClientModule,MatDialogModule],
      declarations: [ TrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
