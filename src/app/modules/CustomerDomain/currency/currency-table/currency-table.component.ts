import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Commodity } from '../../commodity/commodity';
import { CurrencytableService } from '../currencytable.service';
import { DatePipe } from '@angular/common';

const USER_SCHEMA: any = {
  // "conversionKey": "conversionKey",
  "conversionKey": "text",
  "conversionName": "text",
  "conversionFactor": "text",
  "createdDate": "date",
  "status": "boolean",
  "createdBy": "text",
  "edit": "edit",
  "save": "boolean"
}

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {
  datePipeString!: any;
  dataSource!: MatTableDataSource<Commodity>;
  posts: Commodity[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['conversionKey', 'conversionName', 'conversionFactor', 'createdDate', 'status', 'createdBy', 'edit', 'save'];

  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private router: Router, private currencyTableService: CurrencytableService, private datePipe: DatePipe, private http: HttpClient) { }

  public test: any;
  ngOnInit() {

    this.currencyTableService.getTable().then(response => {
      this.posts = response.data;
      //console.log("post   "+this.posts);
      this.test = this.posts;
      this.test = JSON.stringify(this.test);
      console.log("String DAta" + this.test);
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyfilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  conversekey!: string;
  oldData(element: any) {
    this.conversekey = element.id;
  }
  closeTable(){
    this.router.navigate(['/currency']);
  }


  newData(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    delete element["id"];
    console.log(element);
    this.http.put('https://mdm-currencyconversion.azurewebsites.net/currencyconversion/update/' + this.conversekey, element)
      .subscribe((result) => {
        console.log("result", result)
      });
  }

  saveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-currencyconversion.azurewebsites.net/commodity/savedsearch', data)
      .subscribe((result) => {
        console.log("saved data", result)
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    console.log(data);
    this.http.put('https://mdm-currencyconversion.azurewebsites.net/commodity/savedsearch', data)
      .subscribe((result) => {
        console.log("unsaved data", result)
      })
  }
}
