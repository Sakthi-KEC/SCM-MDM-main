import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addyardsgroup',
  templateUrl: './add-yards.component.html',
  styleUrls: ['./add-yards.component.css']
})

export class AddyardsComponent implements OnInit,OnDestroy {
  yardsService: any;
  yards: any;
  addyardsForm = new FormGroup({
    yardsCode: new FormControl(''),
    yardsCountry: new FormControl(''),
    yardsCity: new FormControl(''),
    yardsPincode: new FormControl(''),
    yardsCapacity: new FormControl(''),
    yardsTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }
  public data: any = [];

  ngOnInit(): void {
    this.addyardsForm = this.formBuilder.group({
      yardsCode: [null, Validators.required],
      yardsCountry: [null, Validators.required],
      yardsCity: [null, Validators.required],
      yardsPincode: [null, Validators.required],
      yardsCapacity: [null, Validators.required],
      yardsTotalArea: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-location.azurewebsites.net/yards', element)
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
