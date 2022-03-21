import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddcommodityComponent } from './addcommodity/addcommodity.component';
import { AddcommoditygroupComponent } from './addcommoditygroup/addcommoditygroup.component';
import { CommodityTableService } from './commodity-table.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  dataUrl!: Subscription;
  searchForm = new FormGroup({
    commodityCode: new FormControl(''),
    commodityName: new FormControl(''),
    commodityGroup: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: CommodityTableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      commodityCode: [''],
      commodityName: [''],
      commodityGroup: [''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-rscommodity.azurewebsites.net/commodity/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
    })
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-rscommodity.azurewebsites.net/commodity/saved/' + this.selected
  this.dataUrl =  this.http.get(url)
      .subscribe(() => {
      });
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['commodity/table']);
  }
  addCommodity = () => {
    const dialogRef = this.dialog.open(AddcommodityComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  addCommodityGroup = () => {
    const dialogRef = this.dialog.open(AddcommoditygroupComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  commoditySearch = (searchform: any) => {
    var code = searchform.commodityCode;
    var name = searchform.commodityName;
    var group = searchform.commodityGroup;
    var by = searchform.createdBy;
    var cdate = searchform.date;
    var url = "https://mdm-rscommodity.azurewebsites.net/commodity/search?" + "commodityCode=" + code + "&commodityName=" + name + "&commodityGroupCode=" + group + "&createdBy=" + by + "&date" + cdate;
    this.http.get(url)
      .subscribe(() => {
      })
    this.service.setMessage(url, "search");
    this.router.navigate(['commodity/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

}
