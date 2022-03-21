import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-un-group',
  templateUrl: './add-un-group.component.html',
  styleUrls: ['./add-un-group.component.css']
})

export class AddUnGroupComponent implements OnInit {
  addunGroupForm = new FormGroup({
    unGroupCode: new FormControl(''),
    unGroupName: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl('')
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.addunGroupForm = this.formBuilder.group({
      unGroupCode: [null],
      unGroupName: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required]
    });
  }

  addSuccess(data: any) {
    this.http.post('https://mdm-dangerouscargo.azurewebsites.net/ungroup', data)
      .subscribe((result) => {
        console.log("result", result)
      })
    console.log(data);
  }
}
