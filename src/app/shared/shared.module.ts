import { ShipstableService } from '../modules/Transporation/ships/shipstable.service';
import { TruckstableService } from '../modules/Transporation/trucks/trucktable.service';
import { MaterialModule } from './../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencytableService } from '../modules/CustomerDomain/currency/currencytable.service';
import { CommodityTableService } from '../modules/CustomerDomain/commodity/commodity-table.service';
import { UnnumbertableService } from '../modules/CustomerDomain/un-number/unnumbertable.service';
import { flightstableService } from '../modules/Transporation/flights/flightstable.service';
import { WarehouseTableService } from '../modules/Locations/warehouse/warehousetable.service';
import { YardsTableService } from '../modules/Locations/yards/yardstable.service';
import { TrainstableService } from '../modules/Transporation/trains/trainstable.service';
import { OfficeTableService } from '../modules/Locations/office/officetable.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],

  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],

  providers: [
    CommodityTableService,
    UnnumbertableService,
    CurrencytableService,
    TruckstableService,
    ShipstableService,
    WarehouseTableService,
    YardsTableService,
    TrainstableService,
    flightstableService,
    OfficeTableService,
    DatePipe
  ]
})

export class SharedModule { }
