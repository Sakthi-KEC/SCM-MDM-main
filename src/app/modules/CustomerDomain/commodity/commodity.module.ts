import { ElementRef,HostListener,NgModule, OnDestroy } from "@angular/core";
import { AddcommodityComponent } from "./addcommodity/addcommodity.component";
import { CommodityTableComponent } from "./commodity-table/commodity-table.component";
import { CommodityComponent } from "./commodity.component";
import { AddcommoditygroupComponent } from "./addcommoditygroup/addcommoditygroup.component";
import { CommodityRoutingModule } from "./commodity-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations: [
        CommodityComponent,
        CommodityTableComponent,
        AddcommodityComponent,
        AddcommoditygroupComponent,

    ],
    imports: [CommodityRoutingModule, SharedModule],

})
export class CommodityModule implements OnDestroy {
    @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }

}