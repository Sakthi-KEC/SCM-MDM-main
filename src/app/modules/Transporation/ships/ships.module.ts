import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { AddShipsComponent } from "./add-ships/add-ships.component";
import { ShipsRoutingModule } from "./ship-routing.module";
import { ShipsComponent } from "./ships-search/ships.component";
import { ShipsTableComponent } from "./ships-table/ships-table.component";
@NgModule({
    declarations:[
        AddShipsComponent,
        ShipsComponent,
        ShipsTableComponent,
    ],
    imports: [ShipsRoutingModule,SharedModule],
    
})
export class ShipsModule{

}