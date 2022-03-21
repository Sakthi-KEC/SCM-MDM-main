import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {
  calculateForm = new FormGroup({
    currencyCount: new FormControl(''),
    conversionKey: new FormControl(''),
    fromCurrency: new FormControl(''),
    roundoffvalue: new FormControl('')
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  public data: any = [];
  public data1: any = [];
  public factor:any;
  ngOnInit(): void {
    this.calculateForm = this.formBuilder.group({
      currencyCount: [null],
      conversionKey: [null],
      fromCurrency: [null],
      roundoffvalue:[null]
    });

    const url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/getname'
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log("Worked  " + this.data)
    },(error) => {
      console.log(error);
      })

    const url1 = 'https://mdm-currencyconversion.azurewebsites.net/roundoff/allcodes'
    this.http.get(url1).subscribe((res) => {
      this.data1 = res;
      console.log("Worked  " + this.data1)
    },(error) => {
      console.log(error);
      })
  } 
  
  selected = "";
  update(e: any) {
    this.selected = e.target.value;
    var url = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/getfactor/' + this.selected
    this.http.get(url)
      .subscribe((result) => {
        console.log("factor", result)
        this.factor=result
      },(error) => {
        console.log(error);
        });
  }

  selected1!:number;
  update1(e: any) {
    this.selected1 = e.target.value;
    
  }

  addSuccess(data: any) {
    console.log(data);
    let count=data.currencyCount;
     let conversion=this.selected;
     let calculate=count*this.factor;
     var result=calculate.toFixed(this.selected1)
     window.alert("The conversion result from USD to "+conversion+ " is "+result);
  }
}
