import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomergroup',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit,OnDestroy {
  customerService: any;
  customer: any;
  addcustomerForm = new FormGroup({
    customerCode: new FormControl(''),
    customerDomain: new FormControl(''),
    customerName: new FormControl(''),
    contractStartDate: new FormControl(''),
    contractEndDate: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;
  datePipeString1!: any;
  datePipeString2!: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }
  public data: any = [];

  ngOnInit(): void {
    this.addcustomerForm = this.formBuilder.group({
      customerCode: [null, Validators.required],
      customerDomain: [null, Validators.required],
      customerName: [null, Validators.required],
      contractStartDate: [null, Validators.required],
      contractEndDate: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    this.datePipeString1 = this.datePipe.transform(element.contractStartDate, 'yyyy-MM-dd');
    this.datePipeString2 = this.datePipe.transform(element.contractEndDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.contractStartDate = this.datePipeString1;
    element.contractEndDate = this.datePipeString2;
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-customer.azurewebsites.net/customer', element)
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
