import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { AddFlightsComponent } from "./add-flights/add-flights.component";
import { FlightsRoutingModule } from "./flights-routing.module";
import { FlightsComponent } from "./flights-search/flights.component";
import { FlightsTableComponent } from "./flights-table/flights-table.component";
@NgModule({
    declarations:[
        AddFlightsComponent,
        FlightsComponent,
        FlightsTableComponent,
    ],
    imports: [FlightsRoutingModule,SharedModule],
    
})
export class flightsModule{

}