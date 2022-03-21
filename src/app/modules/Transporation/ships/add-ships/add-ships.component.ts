import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ships',
  templateUrl: './add-ships.component.html',
  styleUrls: ['./add-ships.component.css']
})
export class AddShipsComponent  {


  shipsService: any;
  ships: any;
  

  addshipsForm = new FormGroup({
    shipsCode: new FormControl(''),
    shipsCountry: new FormControl(''),
    shipsOrigin: new FormControl(''),
    shipsDestination: new FormControl(''),
    shipsCapacity: new FormControl(''),
    shipsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')

  });
  datePipeString: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }

  public data: any = [];
 
  ngOnInit(): void {
    this.addshipsForm = this.formBuilder.group({
      shipsCode: [null, Validators.required],
      shipsCountry: [null, Validators.required],
      shipsOrigin: [null, Validators.required],
      shipsDestination: [null, Validators.required],
      shipsCapacity: [null, Validators.required],
      shipsVendor: [null, Validators.required],
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
    this.http.post('https://mdm-transportation.azurewebsites.net/transportation/ship', element)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
  }

}
