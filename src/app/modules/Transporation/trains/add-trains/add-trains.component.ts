import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trains',
  templateUrl: './add-trains.component.html',
  styleUrls: ['./add-trains.component.css']
})
export class AddTrainsComponent  {


  trainsService: any;
  trains: any;
  

  addtrainsForm = new FormGroup({
    trainsCode: new FormControl(''),
    trainsCountry: new FormControl(''),
    trainsOrigin: new FormControl(''),
    trainsDestination: new FormControl(''),
    trainsCapacity: new FormControl(''),
    trainsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')

  });
  datePipeString: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }

  public data: any = [];
 
  ngOnInit(): void {
    this.addtrainsForm = this.formBuilder.group({
      trainsCode: [null, Validators.required],
      trainsCountry: [null, Validators.required],
      trainsOrigin: [null, Validators.required],
      trainsDestination: [null, Validators.required],
      trainsCapacity: [null, Validators.required],
      trainsVendor: [null, Validators.required],
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
    this.http.post('https://mdm-transportation.azurewebsites.net/transportation/train', element)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
  }

}
