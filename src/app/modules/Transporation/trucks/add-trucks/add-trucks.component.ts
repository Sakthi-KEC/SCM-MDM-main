import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trucks',
  templateUrl: './add-trucks.component.html',
  styleUrls: ['./add-trucks.component.css']
})
export class AddTrucksComponent {

  TrucksService: any;
  trucks: any;
  

  addTrucksForm = new FormGroup({
    truckCode: new FormControl(''),
    truckCountry: new FormControl(''),
    truckOrigin: new FormControl(''),
    truckDestination: new FormControl(''),
    truckCapacity: new FormControl(''),
    truckVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')

  });
  datePipeString: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }

  public data: any = [];
 
  ngOnInit(): void {
    this.addTrucksForm = this.formBuilder.group({
      truckCode: [null, Validators.required],
      truckCountry: [null, Validators.required],
      truckOrigin: [null, Validators.required],
      truckDestination: [null, Validators.required],
      truckCapacity: [null, Validators.required],
      truckVendor: [null, Validators.required],
      cost: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });

    const url = 'https://mdm-transportation.azurewebsites.net/Trucksgroup/groupcodes'
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log("Worked  " + this.data)
    },(error) => {
      console.log(error);
      })
  }

  addSuccess(element: any) {

    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-transportation.azurewebsites.net/Trucks', element)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
  }
}
