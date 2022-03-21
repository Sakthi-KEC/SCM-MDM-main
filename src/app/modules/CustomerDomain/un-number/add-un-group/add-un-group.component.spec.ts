import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddUnGroupComponent } from './add-un-group.component';

describe('AddUnGroupComponent', () => {
  let component: AddUnGroupComponent;
  let fixture: ComponentFixture<AddUnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
      declarations: [AddUnGroupComponent],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
