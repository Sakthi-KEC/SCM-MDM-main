import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TruckstableService } from '../trucktable.service';
import { AddTrucksComponent } from '../add-trucks/add-trucks.component';
@Component({
  selector: 'app-trucks',
  templateUrl: './truck-search.component.html',
  styleUrls: ['./truck-search.component.css']
})
export class TruckSearchComponent {

  searchForm = new FormGroup({
    truckCode: new FormControl(''),
    truckCountry: new FormControl(''),
    truckOrigin: new FormControl(''),
    truckDestination: new FormControl(''),
    truckCapacity: new FormControl(''),
    truckVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
   // createdDate: new FormControl(''),
    active: new FormControl('')
  });


  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: TruckstableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      truckCode: [''],
      truckCountry: [''],
      truckOrigin: [''],
      truckDestination: [''],
      truckCapacity: '',
      truckVendor: [''],
      cost: '',
      createdBy: [''],
    //  createdDate: [''],
      active: [''],
    });


    const url = 'https://mdm-transportation.azurewebsites.net/trucks/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log("Worked  " + this.data)

    })


  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/saved/' + this.selected
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['trucks/table']);
  }


  addtrucks = () => {
    console.log("addtrucks")
    const dialogRef = this.dialog.open(AddTrucksComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  trucksSearch = (searchform: any) => {


    var code = searchform.truckCode;
    var country = searchform.truckCountry;
    var origin = searchform.truckOrigin;
    var by = searchform.createdBy;
    var destination = searchform.truckDestination;
    var capacity = searchform.truckCapacity;
    var vendor = searchform.truckVendor;
    var cdollar = searchform.cost


    var url = "https://mdm-transportation.azurewebsites.net/trucks/search?" + "truckCode=" + code + "&truckCountry=" + country + "&truckOrigin=" + origin + "&truckDestination=" + destination + "&truckCapacity=" + capacity + "&truckVendor=" + vendor + "&cost=" + cdollar + "&createdBy=" + by;
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    this.service.setMessage(url, "search");


    this.router.navigate(['trucks/table']);

  }

  clearData = () => {
    this.searchForm.reset();
   
  }

  truckCodesearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/' + data;
    var a = "truckCodesearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);

  }

  truckCountrysearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/country/' + data;
    var a = "truckCountrysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }

  truckOriginsearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/' + data;
    var a = "truckOriginsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }

  truckDestinationsearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/truckDestination/' + data;
    var a = "truckDestinationsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }
  truckCapacitysearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/' + data;
    var a = "truckCapacitysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);

  }

  truckVendorsearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/country/' + data;
    var a = "truckVendorsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }

  costsearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/' + data;
    var a = "costsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }

  createdbysearch(data: any) {
    var url = 'https://mdm-transportation.azurewebsites.net/trucks/createdby/' + data;
    var a = "createdbysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trucks/table']);
  }


}
