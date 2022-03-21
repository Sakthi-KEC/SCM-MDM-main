import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcommoditygroup',
  templateUrl: './addcommoditygroup.component.html',
  styleUrls: ['./addcommoditygroup.component.css']
})

export class AddcommoditygroupComponent implements OnInit,OnDestroy {
  commodityService: any;
  commodity: any;
  addCommodityForm: any;
  addCommodityGroupForm = new FormGroup({
    commodityCode: new FormControl(''),
    commodityName: new FormControl(''),
    commodityDescription: new FormControl(''),
    commodityGroupCode: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    status: new FormControl('')
  });
  datePipeString: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private datePipe: DatePipe) { }
  public data: any = [];

  ngOnInit(): void {
    this.addCommodityGroupForm = this.formBuilder.group({
      commodityCode: [null],
      commodityName: [null, Validators.required],
      commodityDescription: [null, Validators.required],
      commodityGroupCode: [null],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
      status: [false]
    });
    
    const url = 'https://mdm-rscommoditygroup.azurewebsites.net/commoditygroup/groupcodes'
    this.http.get(url).subscribe((res) => {
      this.data = res;
    },(error) => {
      console.log(error);
      })
  }

  addSuccess(element: any) {
    this.datePipeString = this.datePipe.transform(element.createdDate, 'yyyy-MM-dd');
    element.createdDate = this.datePipeString;
    element.saved = false;
    this.http.post('https://mdm-rscommodity.azurewebsites.net/commodity', element)
      .subscribe(() => {
      },(error) => {
        console.log(error);
        })
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}
