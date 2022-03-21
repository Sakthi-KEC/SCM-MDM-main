import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TrainstableService } from '../trainstable.service';
import { AddTrainsComponent } from '../add-trains/add-trains.component';
@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent {

  searchForm = new FormGroup({
    trainsCode: new FormControl(''),
    trainsCountry: new FormControl(''),
    trainsOrigin: new FormControl(''),
    trainsDestination: new FormControl(''),
    trainsCapacity: new FormControl(''),
    trainsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
   // createdDate: new FormControl(''),
    active: new FormControl('')
  });


  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: TrainstableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      trainsCode: [''],
      trainsCountry: [''],
      trainsOrigin: [''],
      trainsDestination: [''],
      trainsCapacity: '',
      trainsVendor: [''],
      cost: '',
      createdBy: [''],
    //  createdDate: [''],
      active: [''],
    });


    const url = 'https://mdm-transportation.azurewebsites.net/transportation/train/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log("Worked  " + this.data)

    })


  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-transportation.azurewebsites.net/transportation/train/saved/' + this.selected
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['trains/table']);
  }


  addtrains = () => {
    console.log("addtrains")
    const dialogRef = this.dialog.open(AddTrainsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  trainsSearch = (searchform: any) => {


    var code = searchform.trainsCode;
    var country = searchform.trainsCountry;
    var origin = searchform.trainsOrigin;
    var by = searchform.createdBy;
    var destination = searchform.trainsDestination;
    var capacity = searchform.trainsCapacity;
    var vendor = searchform.trainsVendor;
    var cdollar = searchform.cost


    var url = "https://mdm-transportation.azurewebsites.net/transportation/train/search?" + "trainsCode=" + code + "&trainsCountry=" + country + "&trainsOrigin=" + origin + "&trainsDestination=" + destination + "&trainsCapacity=" + capacity + "&trainsVendor=" + vendor + "&cost=" + cdollar + "&createdBy=" + by;
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    this.service.setMessage(url, "search");


    this.router.navigate(['trains/table']);

  }

  clearData = () => {
    this.searchForm.reset();
   
  }

  trainsCodesearch(data: any) {
    var url = 'http://localhost:8083/trains/' + data;
    var a = "trainsCodesearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);

  }

  trainsCountrysearch(data: any) {
    var url = 'http://localhost:8083/trains/country/' + data;
    var a = "trainsCountrysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }

  trainsOriginsearch(data: any) {
    var url = 'http://localhost:8082/trains/' + data;
    var a = "trainsOriginsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }

  trainsDestinationsearch(data: any) {
    var url = 'http://localhost:8083/trains/trainsDestination/' + data;
    var a = "trainsDestinationsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }
  trainsCapacitysearch(data: any) {
    var url = 'http://localhost:8083/trains/' + data;
    var a = "trainsCapacitysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);

  }

  trainsVendorsearch(data: any) {
    var url = 'http://localhost:8083/trains/country/' + data;
    var a = "trainsVendorsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }

  costsearch(data: any) {
    var url = 'http://localhost:8082/trains/' + data;
    var a = "costsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }

  createdbysearch(data: any) {
    var url = 'http://localhost:8083/trains/createdby/' + data;
    var a = "createdbysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['trains/table']);
  }


}
