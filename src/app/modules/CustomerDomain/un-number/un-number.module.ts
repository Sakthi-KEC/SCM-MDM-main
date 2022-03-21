
import { NgModule } from "@angular/core";
import { AddUnGroupComponent } from "./add-un-group/add-un-group.component";
import { AddUnNumberComponent } from "./add-un-number/add-un-number.component";
import { UnNumberRoutingModule } from "./un-number-routing.module";
import { UnNumberTableComponent } from "./un-number-table/un-number-table.component";
import { UnNumberComponent } from "./un-number.component";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations:[
        UnNumberComponent,
        UnNumberTableComponent,
        AddUnGroupComponent ,
        AddUnNumberComponent,
    ],
    imports: [UnNumberRoutingModule,SharedModule],
    
})
export class UnNumberModule{

}