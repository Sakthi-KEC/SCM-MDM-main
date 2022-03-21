import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableExporterModule } from 'mat-table-exporter';

import { TrucksTableComponent } from './trucks-table.component';

describe('TrucksTableComponent', () => {
  let component: TrucksTableComponent;
  let fixture: ComponentFixture<TrucksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,RouterModule,MatMenuModule,MatTableExporterModule,RouterTestingModule],
      declarations: [ TrucksTableComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
