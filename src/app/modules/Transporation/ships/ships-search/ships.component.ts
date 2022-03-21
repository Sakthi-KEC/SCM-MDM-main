import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ShipstableService } from '../shipstable.service';
import { AddShipsComponent } from '../add-ships/add-ships.component';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent {

  searchForm = new FormGroup({
    shipsCode: new FormControl(''),
    shipsCountry: new FormControl(''),
    shipsOrigin: new FormControl(''),
    shipsDestination: new FormControl(''),
    shipsCapacity: new FormControl(''),
    shipsVendor: new FormControl(''),
    cost: new FormControl(''),
    createdBy: new FormControl(''),
   // createdDate: new FormControl(''),
    active: new FormControl('')
  });


  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: ShipstableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      shipsCode: [''],
      shipsCountry: [''],
      shipsOrigin: [''],
      shipsDestination: [''],
      shipsCapacity: '',
      shipsVendor: [''],
      cost: '',
      createdBy: [''],
    //  createdDate: [''],
      active: [''],
    });


    const url = 'https://mdm-transportation.azurewebsites.net/transportation/ship/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log("Worked  " + this.data)

    })


  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-transportation.azurewebsites.net/transportation/ship/saved/' + this.selected
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['ships/table']);
  }


  addships = () => {
    console.log("addships")
    const dialogRef = this.dialog.open(AddShipsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  shipsSearch = (searchform: any) => {


    var code = searchform.shipsCode;
    var country = searchform.shipsCountry;
    var origin = searchform.shipsOrigin;
    var by = searchform.createdBy;
    var destination = searchform.shipsDestination;
    var capacity = searchform.shipsCapacity;
    var vendor = searchform.shipsVendor;
    var cdollar = searchform.cost


    var url = "https://mdm-transportation.azurewebsites.net/transportation/ship/search?" + "shipsCode=" + code + "&shipsCountry=" + country + "&shipsOrigin=" + origin + "&shipsDestination=" + destination + "&shipsCapacity=" + capacity + "&shipsVendor=" + vendor + "&cost=" + cdollar + "&createdBy=" + by;
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    this.service.setMessage(url, "search");


    this.router.navigate(['ships/table']);

  }

  clearData = () => {
    this.searchForm.reset();
   
  }

  shipsCodesearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsCodesearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);

  }

  shipsCountrysearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsCountrysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }

  shipsOriginsearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsOriginsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }

  shipsDestinationsearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsDestinationsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }
  shipsCapacitysearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsCapacitysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);

  }

  shipsVendorsearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "shipsVendorsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }

  costsearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "costsearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }

  createdbysearch(data: any) {
    var url = 'http://localhost:8086/transportation/ship/search?' + data;
    var a = "createdbysearch";
    this.service.setMessage(url, a);
    console.log(url);
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      })
    console.log(data);
    this.searchForm.reset();
    this.router.navigate(['ships/table']);
  }


}
