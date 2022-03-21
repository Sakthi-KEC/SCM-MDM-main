import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableExporterModule } from 'mat-table-exporter';

import { YardsTableComponent } from './yards-table.component';

describe('YardsTableComponent', () => {
  let component: YardsTableComponent;
  let fixture: ComponentFixture<YardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule,HttpClientTestingModule,HttpClientModule,MatMenuModule,RouterTestingModule,MatTableExporterModule],
      declarations: [ YardsTableComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
