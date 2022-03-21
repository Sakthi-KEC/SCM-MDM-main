import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerTableService } from '../customertable.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerComponent implements OnInit {
  dataUrl!: Subscription;
  searchForm = new FormGroup({
    customerCode: new FormControl(''),
    customerName: new FormControl(''),
    customerDomain: new FormControl(''),
    contractStartDate: new FormControl(''),
    contractEndDate: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });
  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private service: CustomerTableService, private http: HttpClient) { }
  public data: any = []
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      customerCode: [''],
      customerName: [''],
      customerDomain: [''],
      contractStartDate: [''],
      contractEndDate: [''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-customer.azurewebsites.net/customer/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
    })
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-customer.azurewebsites.net/customer/saved/' + this.selected
  this.dataUrl =  this.http.get(url)
      .subscribe(() => {
      });
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['customer/table']);
  }
  addcustomer = () => {
    const dialogRef = this.dialog.open(AddCustomerComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  customerSearch = (searchform: any) => {
    var code = searchform.customerCode;
    var name = searchform.customerName;
    var domain = searchform.customerDomain;
    var csdate = searchform.contractStartDate;
    var cedate = searchform.contractEndDate;
    var by = searchform.createdBy;
    var cdate = searchform.date;
    var url = "https://mdm-customer.azurewebsites.net/customer/search?" + "customerCode=" + code + "&customerName=" + name + "&customerDomain=" + domain + "contractStartDate=" + csdate + "&contractEndDate=" + cedate + "&createdBy=" + by + "&createdDate" + cdate;
    this.http.get(url)
      .subscribe(() => {
      })
    this.service.setMessage(url, "search");
    this.router.navigate(['customer/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

}
