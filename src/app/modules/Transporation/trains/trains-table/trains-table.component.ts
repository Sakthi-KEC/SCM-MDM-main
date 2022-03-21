import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trains } from '../trains';
import { TrainstableService } from '../trainstable.service';



const USER_SCHEMA: any = {
  "trainsCode": "text",
  "trainsCountry": "text",
  "trainsOrigin": "text",
  "trainsDestination": "text",
  "trainsCapacity": "text",
  "trainsVendor": "text",
  "cost": "text",
  "status": "boolean",
  "createdBy": "text",
  "createdDate": "date",
  "edit": "edit",
  "save": "save"
}


@Component({
  selector: 'app-trains-table',
  templateUrl: './trains-table.component.html',
  styleUrls: ['./trains-table.component.css']
})
export class TrainsTableComponent implements OnInit {

  conversekey!: string;
  datePipeString!: any;
  old: string[] = [];
  dataSource!: MatTableDataSource<Trains>;
  posts: Trains[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['trainsCode', 'trainsCountry', 'trainsOrigin', 'trainsDestination', 'trainsCapacity', 'trainsVendor',"cost", 'status', 'createdBy', 'createdDate', "edit", "save"];

  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private trainstableService: TrainstableService, private http: HttpClient, private datePipe: DatePipe,private router: Router) { }

  ngOnInit() {

    this.trainstableService.getTable().then(response => {
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
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/train/edit/' + this.conversekey, element)

      .subscribe((result) => {

        console.log("result", result)


      });
  }

  closeTable(){
    this.router.navigate(['/trains']);
  }
oldData(element: any) {
  this.conversekey = element.id;
  }
  
  saveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/train/savedsearch', data)
      .subscribe((result) => {
        console.log("saved data", result)
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-transportation.azurewebsites.net/transportation/train/savedsearch', data)
      .subscribe((result) => {
        console.log("unsaved data", result)
      })
  }

}
