import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficeComponent } from '../add-office/add-office.component';
import { OfficeTableService } from '../officetable.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-office',
  templateUrl: './office-search.component.html',
  styleUrls: ['./office-search.component.css']
})
export class OfficeComponent implements OnInit {
  dataUrl!: Subscription;
  searchForm = new FormGroup({
    officeCode: new FormControl(''),
    officeCountry: new FormControl(''),
    officeCity: new FormControl(''),
    officePincode: new FormControl(''),
    officeCapacity: new FormControl(''),
    officeTotalArea: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: OfficeTableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      officeCode: [''],
      officeCountry: [''],
      officeCity: [''],
      officePincode: [''],
      officeCapacity: [''],
      officeTotalArea: [''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-location.azurewebsites.net/office/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
    })
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-location.azurewebsites.net/office/saved/' + this.selected
  this.dataUrl =  this.http.get(url)
      .subscribe(() => {
      });
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['office/table']);
  }
  addoffice = () => {
    const dialogRef = this.dialog.open(AddOfficeComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  officeSearch = (searchform: any) => {
    var code = searchform.officeCode;
    var name = searchform.officeCountry;
    var city = searchform.officeCity;
    var pin = searchform.officePincode;
    var capacity = searchform.officeCapacity;
    var area = searchform.officeTotalArea;
    var by = searchform.createdBy;
    var cdate = searchform.date;
    var url = "https://mdm-location.azurewebsites.net/office/search?" + "officeCode=" + code + "&officeCountry=" + name + "&officeCity=" + city + "officePincode=" + pin + "&officeCapacity=" + capacity + "&officeTotalArea=" + area  + "&createdBy=" + by + "&date" + cdate;
    this.http.get(url)
      .subscribe(() => {
      })
    this.service.setMessage(url, "search");
    this.router.navigate(['office/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

}
