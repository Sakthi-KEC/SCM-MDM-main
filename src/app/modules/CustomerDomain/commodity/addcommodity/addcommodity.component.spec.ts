import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
//import { provideRoutes, RouterModule } from '@angular/router';
import { AddcommodityComponent } from './addcommodity.component';

describe('AddcommodityComponent', () => {
  let component: AddcommodityComponent;
  let fixture: ComponentFixture<AddcommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule,FormsModule, ReactiveFormsModule],
      declarations: [AddcommodityComponent],
      providers: [HttpClient]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
