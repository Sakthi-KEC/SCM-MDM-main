import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddwarehouseComponent } from './add-warehouse/add-warehouse.component';
import { WarehouseTableService } from './warehousetable.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  dataUrl!: Subscription;
  searchForm = new FormGroup({
    warehouseCode: new FormControl(''),
    warehouseCountry: new FormControl(''),
    warehouseCity: new FormControl(''),
    warehousePincode: new FormControl(''),
    warehouseCapacity: new FormControl(''),
    warehouseTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: WarehouseTableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      warehouseCode: [''],
      warehouseCountry: [''],
      warehouseCity: [''],
      warehousePincode: [''],
      warehouseCapacity: [''],
      warehouseTotalArea: [''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-location.azurewebsites.net/warehouse/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
    })
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-location.azurewebsites.net/warehouse/saved/' + this.selected
  this.dataUrl =  this.http.get(url)
      .subscribe(() => {
      });
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['warehouse/table']);
  }
  addwarehouse = () => {
    const dialogRef = this.dialog.open(AddwarehouseComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  warehouseSearch = (searchform: any) => {
    var code = searchform.warehouseCode;
    var name = searchform.warehouseCountry;
    var city = searchform.warehouseCity;
    var pin = searchform.warehousePincode;
    var capacity = searchform.warehouseCapacity;
    var area = searchform.warehouseTotalArea;
    var by = searchform.createdBy;
    var cdate = searchform.date;
    var url = "https://mdm-location.azurewebsites.net/warehouse/search?" + "warehouseCode=" + code + "&warehouseCountry=" + name + "&warehouseCity=" + city + "warehousePincode=" + pin + "&warehouseCapacity=" + capacity + "&warehouseTotalArea=" + area  + "&createdBy=" + by + "&date" + cdate;
    this.http.get(url)
      .subscribe(() => {
      })
    this.service.setMessage(url, "search");
    this.router.navigate(['warehouse/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

}
