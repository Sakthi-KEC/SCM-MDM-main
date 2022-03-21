import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addwarehousegroup',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})

export class AddwarehouseComponent implements OnInit,OnDestroy {
  warehouseService: any;
  warehouse: any;
  addwarehouseForm = new FormGroup({
    warehouseCode: new FormControl(''),
    warehouseCountry: new FormControl(''),
    warehouseCity: new FormControl(''),
    warehousePincode: new FormControl(''),
    warehouseCapacity: new FormControl(''),
    warehouseTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }
  public data: any = [];

  ngOnInit(): void {
    this.addwarehouseForm = this.formBuilder.group({
      warehouseCode: [null, Validators.required],
      warehouseCountry: [null, Validators.required],
      warehouseCity: [null, Validators.required],
      warehousePincode: [null, Validators.required],
      warehouseCapacity: [null, Validators.required],
      warehouseTotalArea: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-location.azurewebsites.net/warehouse', element)
      .subscribe(() => {
      },(error) => {
        console.log(error);
        })
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}
