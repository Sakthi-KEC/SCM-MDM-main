import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableExporterModule } from 'mat-table-exporter';

import { ShipsTableComponent } from './ships-table.component';

describe('ShipsTableComponent', () => {
  let component: ShipsTableComponent;
  let fixture: ComponentFixture<ShipsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,RouterModule,MatMenuModule,MatTableExporterModule,RouterTestingModule],
      declarations: [ ShipsTableComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
