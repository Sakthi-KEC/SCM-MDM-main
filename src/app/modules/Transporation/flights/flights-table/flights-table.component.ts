import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flights } from '../flights';
import { flightstableService } from '../flightstable.service';



const USER_SCHEMA: any = {
  "flightsCode": "text",
  "flightsCountry": "text",
  "flightsOrigin": "text",
  "flightsDestination": "text",
  "flightsCapacity": "text",
  "flightsVendor": "text",
  "cost": "text",
  "status": "boolean",
  "createdBy": "text",
  "createdDate": "date",
  "edit": "edit",
  "save": "save"
}


@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css']
})
export class FlightsTableComponent implements OnInit {

  conversekey!: string;
  datePipeString!: any;
  old: string[] = [];
  dataSource!: MatTableDataSource<Flights>;
  posts: Flights[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['flightsCode', 'flightsCountry', 'flightsOrigin', 'flightsDestination', 'flightsCapacity', 'flightsVendor',"cost", 'status', 'createdBy', 'createdDate', "edit", "save"];

  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private flightstableService: flightstableService, private http: HttpClient, private datePipe: DatePipe,private router: Router) { }

  ngOnInit() {

    this.flightstableService.getTable().then(response => {
      this.posts = response.data;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyfilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  newData(element: any) {


    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');

    element.createdDate = this.datePipeString;
    delete element["id"];
    console.log(element);
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/flight/edit/' + this.conversekey, element)

      .subscribe((result) => {

        console.log("result", result)


      });
  }
  closeTable(){
    this.router.navigate(['/flights']);
  }
oldData(element: any) {
  this.conversekey = element.id;
  }

  saveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/flight/savedsearch', data)
      .subscribe((result) => {
        console.log("saved data", result)
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/flight/savedsearch', data)
      .subscribe((result) => {
        console.log("unsaved data", result)
      })
  }
}
