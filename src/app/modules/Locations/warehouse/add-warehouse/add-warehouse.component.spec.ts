import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddwarehouseComponent } from './add-warehouse.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('AddWarehouseComponent', () => {
  let component: AddwarehouseComponent;
  let fixture: ComponentFixture<AddwarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule,HttpClientTestingModule,HttpClientModule,ReactiveFormsModule,RouterTestingModule,FormsModule,MatSlideToggleModule],
      declarations: [ AddwarehouseComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
