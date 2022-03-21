import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnNumberTableComponent } from './un-number-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('UnNumberTableComponent', () => {
  let component: UnNumberTableComponent;
  let fixture: ComponentFixture<UnNumberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,RouterModule,MatMenuModule,MatTableExporterModule,RouterTestingModule],
      declarations: [UnNumberTableComponent],
      providers: [ DatePipe,RouterModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnNumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
