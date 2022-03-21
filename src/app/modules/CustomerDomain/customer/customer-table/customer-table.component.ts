import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { customer } from '../customer';
import { CustomerTableService } from '../customertable.service';


const USER_SCHEMA: any = {
  "customerCode": "text",
  "customerName": "text",
  "customerDomain": "text",
  "contractStartDate":"date",
  "contractEndDate":"date",
  "status": "boolean",
  "createdBy": "text",
  "createdDate": "date",
  "edit": "edit",
  "save": "boolean"
}

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit,OnDestroy {
  conversekey!: string;
  datePipeString!: any;
  datePipeString1!: any;
  datePipeString2!: any;
  old: string[] = [];
  dataSource!: MatTableDataSource<customer>;
  posts: customer[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['customerCode', 'customerName', 'customerDomain','contractStartDate', 'contractEndDate', 'status', 'createdBy', 'createdDate', "edit", "save"];

  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private customerTableService: CustomerTableService, private http: HttpClient, private datePipe: DatePipe,private router: Router) { }
  ngOnInit() {
    this.customerTableService.getTable().then(response => {
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
    this.datePipeString1 = this.datePipe.transform(element.contractStartDate, 'yyyy-MM-dd');
    this.datePipeString2 = this.datePipe.transform(element.contractEndDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.contractStartDate = this.datePipeString1;
    element.contractEndDate = this.datePipeString2;
    delete element["id"];
    this.http.put('https://mdm-customer.azurewebsites.net/customer/edit/' + this.conversekey, element)
      .subscribe(() => {
      });
  }
  closeTable(){
    this.router.navigate(['/customer']);
  }

oldData(element: any) {
    this.conversekey = element.id;
  }

saveData(data: any) {
    data.saved = !data.saved;
    this.http.put('https://mdm-customer.azurewebsites.net/customer/savedsearch', data)
      .subscribe(() => {
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    this.http.put('https://mdm-customer.azurewebsites.net/customer/savedsearch', data)
      .subscribe(() => {
      })
  }
  @HostListener('unloaded')
  ngOnDestroy() {
      console.log('Cleared');
  }
}
