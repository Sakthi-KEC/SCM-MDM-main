import { HttpClientModule } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CommodityComponent } from './commodity.component';


describe('CommodityComponent', () => {
  let component: CommodityComponent;
  let fixture: ComponentFixture<CommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatDialogModule,RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule],
      declarations: [CommodityComponent],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
