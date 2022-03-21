import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-currency-conversion',
  templateUrl: './add-currency-conversion.component.html',
  styleUrls: ['./add-currency-conversion.component.css']
})
export class AddCurrencyConversionComponent implements OnInit {
  datePipeString!: any;
  addCurrencyConversionForm = new FormGroup({
    conversionKey: new FormControl(''),
    conversionName: new FormControl(''),
    conversionFactor: new FormControl(''),
    status: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl('')
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private http: HttpClient) { }

  ngOnInit(): void {
    this.addCurrencyConversionForm = this.formBuilder.group({
      conversionKey: [null],
      conversionName: [null, Validators.required],
      conversionFactor: [null, Validators.required],
      status: [false],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
    });
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');

    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-currencyconversion.azurewebsites.net/currencyconversion', element)
      .subscribe((result) => {
        console.log("result", result)
      })
    //console.log(data);
    this.router.navigate(['/currency/table']);
  }
}
