import { NgModule } from "@angular/core";
import { AddTrucksComponent } from './add-trucks/add-trucks.component';
import { TruckSearchComponent } from './truck-search/truck-search.component';
import { TrucksTableComponent } from './trucks-table/trucks-table.component';

import { SharedModule } from "src/app/shared/shared.module";
import { TrucksRoutingModule } from "./truck-routing.module";
@NgModule({
    declarations:[
        AddTrucksComponent,
        TruckSearchComponent,
        TrucksTableComponent,
    ],
    imports: [TrucksRoutingModule,SharedModule],
    
})
export class TrucksModule{

}