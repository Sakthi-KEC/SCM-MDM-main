import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { unnumber } from '../un-number';
import { UnnumbertableService } from '../unnumbertable.service';

const USER_SCHEMA: any = {
  "unNumber": "text",
  "unGroupCode": "text",
  "unName": "text",
  "createdBy": "text",
  "status": "text",
  "createdDate": "date",
  "edit": "edit",
  "save": "boolean"
}

@Component({
  selector: 'app-un-number-table',
  templateUrl: './un-number-table.component.html',
  styleUrls: ['./un-number-table.component.css']
})

export class UnNumberTableComponent implements OnInit {
  conversekey!:string;
  datePipeString: any;
  dataSource!: MatTableDataSource<unnumber>;
  posts: unnumber[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['unNumber', 'unGroupCode', 'unName', 'createdBy', 'status', 'createdDate', "edit","save"];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private unnumbertableservice: UnnumbertableService,private datePipe: DatePipe,private http:HttpClient,private router: Router) { }

  ngOnInit() {
    this.unnumbertableservice.getTable().then(response => {
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

  
oldData(element: any){
  this.conversekey = element.id;
}

newData(element: any) {
    console.log(element.unNumber);
    console.log(element.unGroupCode);
    console.log(element.unName);
    console.log(element.unGroupName);
    console.log(element.createdBy);
    console.log(element.status);
    console.log(element.createdDate);
    this.datePipeString= this.datePipe.transform(element.createdDate,'yyyy-MM-dd');
     element.createdDate= this.datePipeString;
     delete element["id"];
     console.log(element);
     this.http.put('https://mdm-dangerouscargo.azurewebsites.net/unnumber/edit/' +  this.conversekey,element)
    .subscribe((result)=>{
       console.log("result",result)
});
  }
  saveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-dangerouscargo.azurewebsites.net/unnumber/savedsearch', data)
      .subscribe((result) => {
        console.log("saved data", result)
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-dangerouscargo.azurewebsites.net/unnumber/savedsearch', data)
      .subscribe((result) => {
        console.log("unsaved data", result)
      })
  }
  closeTable(){
    this.router.navigate(['/unnumber']);
  }
}

