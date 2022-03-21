import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { flightstableService } from '../flightstable.service';
import { AddFlightsComponent } from '../add-flights/add-flights.component';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  searchForm = new FormGroup({
    flightsCode: new FormControl(''),
    flightsCountry: new FormControl(''),
    flightsOrigin: new FormControl(''),
    flightsDestination: new FormControl(''),
    flightsCapacity: new FormControl(''),
    flightsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
   // createdDate: new FormControl(''),
    active: new FormControl('')
  });


  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: flightstableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      flightsCode: [''],
      flightsCountry: [''],
      flightsOrigin: [''],
      flightsDestination: [''],
      flightsCapacity: '',
      flightsVendor: [''],
      cost: '',
      createdBy: [''],
    //  createdDate: [''],
      active: [''],
    });


    const url = 'https://mdm-transportation.azurewebsites.net/transportation/flight/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log("Worked  " + this.data)

    })


  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-transportation.azurewebsites.net/transportation/flight/saved/' + this.selected
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['flights/table']);
  }


  addflights = () => {
    console.log("addflights")
    const dialogRef = this.dialog.open(AddFlightsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  flightsSearch = (searchform: any) => {


    var code = searchform.flightsCode;
    var country = searchform.flightsCountry;
    var origin = searchform.flightsOrigin;
    var by = searchform.createdBy;
    var destination = searchform.flightsDestination;
    var capacity = searchform.flightsCapacity;
    var vendor = searchform.flightsVendor;
    var cdollar = searchform.cost


    var url = "https://mdm-transportation.azurewebsites.net/transportation/flight/search?" + "flightsCode=" + code + "&flightsCountry=" + country + "&flightsOrigin=" + origin + "&flightsDestination=" + destination + "&flightsCapacity=" + capacity + "&flightsVendor=" + vendor + "&cost=" + cdollar + "&createdBy=" + by;
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    this.service.setMessage(url, "search");


    this.router.navigate(['flights/table']);

  }

  clearData = () => {
    this.searchForm.reset();
   
  }

  flightsCodesearch(data: any) {
    var url = 'http://localhost:8083/flights/' + data;
    var a = "flightsCodesearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);

  }

  flightsCountrysearch(data: any) {
    var url = 'http://localhost:8083/flights/country/' + data;
    var a = "flightsCountrysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }

  flightsOriginsearch(data: any) {
    var url = 'http://localhost:8082/flights/' + data;
    var a = "flightsOriginsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }

  flightsDestinationsearch(data: any) {
    var url = 'http://localhost:8083/flights/flightsDestination/' + data;
    var a = "flightsDestinationsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }
  flightsCapacitysearch(data: any) {
    var url = 'http://localhost:8083/flights/' + data;
    var a = "flightsCapacitysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);

  }

  flightsVendorsearch(data: any) {
    var url = 'http://localhost:8083/flights/country/' + data;
    var a = "flightsVendorsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }

  costsearch(data: any) {
    var url = 'http://localhost:8082/flights/' + data;
    var a = "costsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }

  createdbysearch(data: any) {
    var url = 'http://localhost:8083/flights/createdby/' + data;
    var a = "createdbysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['flights/table']);
  }


}
