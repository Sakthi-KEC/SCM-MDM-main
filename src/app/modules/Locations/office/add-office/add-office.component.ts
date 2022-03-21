import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addofficegroup',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})

export class AddOfficeComponent implements OnInit,OnDestroy {
  officeService: any;
  office: any;
  addofficeForm = new FormGroup({
    officeCode: new FormControl(''),
    officeCountry: new FormControl(''),
    officeCity: new FormControl(''),
    officePincode: new FormControl(''),
    officeCapacity: new FormControl(''),
    officeTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }
  public data: any = [];

  ngOnInit(): void {
    this.addofficeForm = this.formBuilder.group({
      officeCode: [null, Validators.required],
      officeCountry: [null, Validators.required],
      officeCity: [null, Validators.required],
      officePincode: [null, Validators.required],
      officeCapacity: [null, Validators.required],
      officeTotalArea: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-location.azurewebsites.net/office', element)
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
