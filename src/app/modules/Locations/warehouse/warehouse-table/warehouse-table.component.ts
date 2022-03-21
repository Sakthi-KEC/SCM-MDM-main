import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { warehouse } from '../warehouse';
import { WarehouseTableService } from '../warehousetable.service';


const USER_SCHEMA: any = {
  "warehouseCode": "text",
  "warehouseCountry": "text",
  "warehouseCity": "text",
  "warehousePincode": "text",
  "warehouseCapacity": "text",
  "warehouseTotalArea": "text",
  "status": "boolean",
  "createdBy": "text",
  "createdDate": "date",
  "edit": "edit",
  "save": "boolean"
}

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.css']
})
export class WarehouseTableComponent implements OnInit,OnDestroy {
  conversekey!: string;
  datePipeString!: any;
  old: string[] = [];
  dataSource!: MatTableDataSource<warehouse>;
  posts: warehouse[] = [];
  dataSchema = USER_SCHEMA;
  columns: string[] = ['warehouseCode', 'warehouseCountry', 'warehouseCity','warehousePincode', 'warehouseCapacity','warehouseTotalArea', 'status', 'createdBy', 'createdDate', "edit", "save"];

  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private warehouseTableService: WarehouseTableService, private http: HttpClient, private datePipe: DatePipe,private router: Router) { }
  ngOnInit() {
    this.warehouseTableService.getTable().then(response => {
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
    this.http.put('https://mdm-location.azurewebsites.net/warehouse/edit/' + this.conversekey, element)
      .subscribe(() => {
      });
  }
  closeTable(){
    this.router.navigate(['/warehouse']);
  }

oldData(element: any) {
    this.conversekey = element.id;
  }

saveData(data: any) {
    data.saved = !data.saved;
    this.http.put('https://mdm-location.azurewebsites.net/warehouse/savedsearch', data)
      .subscribe(() => {
      })
  }
  unsaveData(data: any) {
    data.saved = !data.saved;
    this.http.put('https://mdm-location.azurewebsites.net/warehouse/savedsearch', data)
      .subscribe(() => {
      })
  }
  @HostListener('unloaded')
  ngOnDestroy() {
      console.log('Cleared');
  }
}

