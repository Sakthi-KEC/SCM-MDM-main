import { MatTableExporterModule } from 'mat-table-exporter';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommodityTableComponent } from './commodity-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

describe('CommodityTableComponent', () => {
  let component: CommodityTableComponent;
  let fixture: ComponentFixture<CommodityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule,HttpClientTestingModule,HttpClientModule,MatMenuModule,RouterTestingModule,MatTableExporterModule],
      declarations: [ CommodityTableComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
