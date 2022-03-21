import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUnGroupComponent } from './add-un-group/add-un-group.component';
import { AddUnNumberComponent } from './add-un-number/add-un-number.component';
import { UnnumbertableService } from './unnumbertable.service';

@Component({
  selector: 'app-un-number',
  templateUrl: './un-number.component.html',
  styleUrls: ['./un-number.component.css']
})

export class UnNumberComponent {

  @Output() a: any;
  @Output() url: any;

  searchForm = new FormGroup({
    unGroupCode: new FormControl(''),
    unName: new FormControl(''),
    unNumber: new FormControl(''),
    createdBy: new FormControl(''),
    date: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog, private formBuilder: FormBuilder, private http: HttpClient, private service: UnnumbertableService) { }
  public data: any = []
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      unGroupCode : [''],
      unName: [''],
      unNumber:[''],
      createdBy: [''],
      date: [''],
      active: [''],
    });

    const url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/savedsearch/codes'
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log("Worked  " + this.data)
  
    })
  }
  addunNumber = () => {
    const dialogRef = this.dialog.open(AddUnNumberComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addunGroup = () => {
    const dialogRef = this.dialog.open(AddUnGroupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  unGroupSearch = (searchform: any) => {
    var code = searchform.unGroupCode;
    var name = searchform.unName;
    var groupname = searchform.unNumber;
    var by = searchform.createdBy;
    var udate = searchform.date;
    var url = "https://mdm-dangerouscargo.azurewebsites.net/unnumber/search?"+"unGroupCode="+code+"&unName="+name+"&unNumber="+groupname+"&createdBy="+by+"&date"+udate;
    console.log(url);
    this.http.get(url)
     .subscribe((result) => {
        console.log("result", result)
     })
    this.service.setMessage(url, "search");

    this.router.navigate(['unnumber/table']);
  }
 


  clearData = () => {
    this.searchForm.reset();
  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/code/' + this.selected
    this.http.get(url)
      .subscribe((result: any) => {
        console.log("result", result)
      });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['unnumber/table']);
  }
  ungroupCodeSearch(data: any) {
    var url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/groupcode/' + data;
    var a = "ungroupcode";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      })
    this.searchForm.reset();
    this.router.navigate(['unnumber/table']);
  }

  unNameSearch(data: any) {
    let url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/unname/' + data;
    let a = "unname";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      })
    this.searchForm.reset();
    this.router.navigate(['unnumber/table']);
  }

  unNumberSearch(data: any) {
    let url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/' + data;
    let a = "unNumber";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      })
    this.searchForm.reset();
    this.router.navigate(['unnumber/table']);
  }

  createdbysearch(data: any) {
    let url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/createdby/' + data;
    let a = "createdby";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      })
    this.searchForm.reset();
    this.router.navigate(['unnumber/table']);
  }

  datesearch(data: any) {
    let url = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber/date/' + data;
    let a = "date";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      })
    this.searchForm.reset();
    this.router.navigate(['unnumber/table']);
  }
}
