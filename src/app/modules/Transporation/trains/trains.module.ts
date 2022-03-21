import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { AddTrainsComponent } from "./add-trains/add-trains.component";
import { TrainsRoutingModule } from "./trains-routing.module";
import { TrainsComponent } from "./trains-search/trains.component";
import { TrainsTableComponent } from "./trains-table/trains-table.component";
@NgModule({
    declarations:[
        AddTrainsComponent,
        TrainsComponent,
        TrainsTableComponent,
    ],
    imports: [TrainsRoutingModule,SharedModule],
    
})
export class TrainsModule{

}