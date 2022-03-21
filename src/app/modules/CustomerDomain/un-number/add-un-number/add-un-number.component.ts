import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-un-number',
  templateUrl: './add-un-number.component.html',
  styleUrls: ['./add-un-number.component.css']
})

export class AddUnNumberComponent implements OnInit {
  addunForm = new FormGroup({
    unGroupCode: new FormControl(''),
    unNumber: new FormControl(''),
    unName: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;

  constructor(private http: HttpClient, private router: Router,private datePipe: DatePipe, private formBuilder: FormBuilder) { }

  public data: any = [];

  ngOnInit(): void {
    this.addunForm = this.formBuilder.group({
      unGroupCode: [null,Validators.required],
      unName: [null, Validators.required],
      unNumber: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });

    const url = 'https://mdm-dangerouscargo.azurewebsites.net/ungroup/groupcodes'
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log("Worked  " + this.data)
    },
    (error) => {
      console.log(error);
      }
    )
  }

  addSuccess(element: any) {

    this.datePipeString= this.datePipe.transform(element.createdDate,'yyyy-MM-dd');
    
     element.createdDate= this.datePipeString;
     element.saved = false;
    this.http.post('https://mdm-dangerouscargo.azurewebsites.net/unnumber', element)
      .subscribe((result) => {
        console.log("result", result)
      },(error) => {
        console.log(error);
        })
    //console.log(data);
  }
}
