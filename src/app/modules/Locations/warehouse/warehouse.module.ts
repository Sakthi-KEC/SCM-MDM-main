import { ElementRef,HostListener,NgModule, OnDestroy } from "@angular/core";
import { AddwarehouseComponent } from "./add-warehouse/add-warehouse.component";
import { WarehouseTableComponent } from "./warehouse-table/warehouse-table.component";
import { WarehouseComponent } from "./warehouse.component";
import { WarehouseRoutingModule } from "./warehouse-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations: [
        WarehouseComponent,
        WarehouseTableComponent,
        AddwarehouseComponent,

    ],
    imports: [WarehouseRoutingModule, SharedModule],

})
export class warehouseModule implements OnDestroy {
    @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }

}