import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.css']
})
export class AddFlightsComponent  {


  flightsService: any;
  flights: any;
  

  addflightsForm = new FormGroup({
    flightsCode: new FormControl(''),
    flightsCountry: new FormControl(''),
    flightsOrigin: new FormControl(''),
    flightsDestination: new FormControl(''),
    flightsCapacity: new FormControl(''),
    flightsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')

  });
  datePipeString: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }

  public data: any = [];
 
  ngOnInit(): void {
    this.addflightsForm = this.formBuilder.group({
      flightsCode: [null, Validators.required],
      flightsCountry: [null, Validators.required],
      flightsOrigin: [null, Validators.required],
      flightsDestination: [null, Validators.required],
      flightsCapacity: [null, Validators.required],
      flightsVendor: [null, Validators.required],
      cost: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
  }

  addSuccess(element: any) {

    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-transportation.azurewebsites.net/transportation/flight', element)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
  }

}
