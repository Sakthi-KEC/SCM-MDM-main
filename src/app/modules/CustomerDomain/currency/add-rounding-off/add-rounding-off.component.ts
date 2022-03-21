import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rounding-off',
  templateUrl: './add-rounding-off.component.html',
  styleUrls: ['./add-rounding-off.component.css']
})

export class AddRoundingOffComponent implements OnInit {
  datePipeString!:any;
  addRoundingOffForm = new FormGroup({
    roundingOffPoint: new FormControl(''),
    roundOffValue: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl('')
  });

  constructor(private router: Router, private formBuilder: FormBuilder,private datePipe: DatePipe, private http: HttpClient) { }

  ngOnInit(): void {
    this.addRoundingOffForm = this.formBuilder.group({
      roundingOffPoint: [null],
      roundOffValue: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
    });
  }

  addSuccess(data: any) {
    this.datePipeString= this.datePipe.transform(data.createdDate,'yyyy-MM-dd');
     data.createdDate= this.datePipeString;
    this.http.post('https://mdm-currencyconversion.azurewebsites.net/roundoff', data)
      .subscribe((result) => {
        console.log("result", result)
      })
  }
}
