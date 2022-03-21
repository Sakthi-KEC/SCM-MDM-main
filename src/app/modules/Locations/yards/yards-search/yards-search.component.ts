import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddyardsComponent } from '../add-yards/add-yards.component';
import { YardsTableService } from '../yardstable.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-yards',
  templateUrl: './yards-search.component.html',
  styleUrls: ['./yards-search.component.css']
})
export class YardsComponent implements OnInit {
  dataUrl!: Subscription;
  searchForm = new FormGroup({
    yardsCode: new FormControl(''),
    yardsCountry: new FormControl(''),
    yardsCity: new FormControl(''),
    yardsPincode: new FormControl(''),
    yardsCapacity: new FormControl(''),
    yardsTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: YardsTableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      yardsCode: [''],
      yardsCountry: [''],
      yardsCity: [''],
      yardsPincode: [''],
      yardsCapacity: [''],
      yardsTotalArea: [''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-location.azurewebsites.net/yards/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
    })
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-location.azurewebsites.net/yards/saved/' + this.selected
  this.dataUrl =  this.http.get(url)
      .subscribe(() => {
      });
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['yards/table']);
  }
  addyards = () => {
    const dialogRef = this.dialog.open(AddyardsComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  yardsSearch = (searchform: any) => {
    var code = searchform.yardsCode;
    var name = searchform.yardsCountry;
    var city = searchform.yardsCity;
    var pin = searchform.yardsPincode;
    var capacity = searchform.yardsCapacity;
    var area = searchform.yardsTotalArea;
    var by = searchform.createdBy;
    var cdate = searchform.date;
    var url = "https://mdm-location.azurewebsites.net/yards/search?" + "yardsCode=" + code + "&yardsCountry=" + name + "&yardsCity=" + city + "yardsPincode=" + pin + "&yardsCapacity=" + capacity + "&yardsTotalArea=" + area  + "&createdBy=" + by + "&date" + cdate;
    this.http.get(url)
      .subscribe(() => {
      })
    this.service.setMessage(url, "search");
    this.router.navigate(['yards/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

}
