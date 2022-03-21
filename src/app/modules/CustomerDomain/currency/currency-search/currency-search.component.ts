import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { AddCurrencyConversionComponent } from '../add-currency-conversion/add-currency-conversion.component';
import { AddRoundingOffComponent } from '../add-rounding-off/add-rounding-off.component';
import { CalculateComponent } from '../calculate/calculate.component';
import { CurrencytableService } from '../currencytable.service';

@Component({
  selector: 'app-currency-search',
  templateUrl: './currency-search.component.html',
  styleUrls: ['./currency-search.component.css']
})

export class CurrencySearchComponent {
  searchForm = new FormGroup({
    conversionKey: new FormControl(''),
    conversionName: new FormControl(''),
    conversionFactor: new FormControl(''),
    createdBy: new FormControl(''),
    active: new FormControl('')
  });

  constructor(private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, private service: CurrencytableService, private http: HttpClient) { }
  public search: string[] = [];
  public data: any = []
  save: string[] = ["INR", "EURO"];
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      conversionKey: [''],
      conversionName: [''],
      conversionFactor: '',
      createdBy: [''],
      active: [''],
    });

    const url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/savedsearch/conversionname'
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log("Worked  " + this.data)
    },(error) => {
console.log(error);
})

  }
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/savedsearch/' + this.selected
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        });
    console.log("drop url" + url);
    this.service.setMessage(url, "savedsearch");
    this.router.navigate(['currency/table']);
  }

  clearData = () => {
    this.searchForm.reset();
  }

  currencyConversion = () => {
    const dialogRef = this.dialog.open(AddCurrencyConversionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  roundingOff = () => {
    const dialogRef = this.dialog.open(AddRoundingOffComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  currencySearch = (searchform: any) => {

    var key = searchform.conversionKey;
    var name = searchform.conversionName;
    var factor = searchform.conversionFactor;
    var by = searchform.createdBy;

    var url = "https://mdm-currencyconversion.azurewebsites.net/currencyconversion/customrepo?" + "conversionKey=" + key + "&conversionName=" + name + "&conversionFactor=" + factor + "&createdBy=" + by;
    console.log(url);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    this.service.setMessage(url, "search");
    this.router.navigate(['currency/table']);
  }

  calculate = () => {
    const dialogRef = this.dialog.open(CalculateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  conversionkeysearch(data: any) {
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/conversionkey/' + data;
    var a = "conversionkeysearch";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    this.searchForm.reset();
    this.router.navigate(['currency/table']);
  }

  conversionnamesearch(data: any) {
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/name/' + data;
    var a = "conversionnamesearch";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    this.searchForm.reset();
    this.router.navigate(['currency/table']);
  }

  conversionfactorsearch(data: any) {
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/factor/' + data;
    var a = "conversionfactorsearch";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    this.searchForm.reset();
    this.router.navigate(['currency/table']);
  }

  createdbysearch(data: any) {
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/createdby/' + data;
    var a = "createdbysearch";
    this.service.setMessage(url, a);
    this.http.get(url)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    this.searchForm.reset();
    this.router.navigate(['currency/table']);
  }
}

