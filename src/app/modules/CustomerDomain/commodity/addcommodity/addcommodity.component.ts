import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commodity, Commodity1 } from '../commodity';
import { CommodityTableService } from '../commodity-table.service';

@Component({
  selector: 'app-addcommodity',
  templateUrl: './addcommodity.component.html',
  styleUrls: ['./addcommodity.component.css']
})

export class AddcommodityComponent implements OnInit,OnDestroy {
  commodity: Commodity[] = [];
  addCommodityForm = new FormGroup({
    commodityGroupCode: new FormControl(''),
    commodityGroupName: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private commodityService: CommodityTableService) { }

  ngOnInit(): void {
    this.addCommodityForm = this.formBuilder.group({
      commodityGroupCode: [null],
      commodityGroupName: [null, Validators.required],
      createdBy: [null, Validators.required],
      createdDate: [null, Validators.required],
    });
  }

  addSuccess(commodityGroupCode: string,
    commodityGroupName: string,
    createdBy: string,
    createdDate: string) {
    const newCommodity: Commodity1 = new Commodity1();
    newCommodity.commodityGroupCode = commodityGroupCode;
    newCommodity.commodityGroupName = commodityGroupName;
    newCommodity.createdBy = createdBy;
    newCommodity.createdDate = createdDate;
    this.commodityService.addCommodity(newCommodity)
      .subscribe(newCommodity => {
        this.commodity.push(newCommodity);
      });
    this.router.navigate(['/commodity']);

  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}


