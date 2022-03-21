import { ElementRef,HostListener,NgModule, OnDestroy } from "@angular/core";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { CustomerTableComponent } from "./customer-table/customer-table.component";
import { CustomerComponent } from "./customer-search/customer-search.component";
import { customerRoutingModule } from "./customer-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations: [
        CustomerComponent,
        CustomerTableComponent,
        AddCustomerComponent,

    ],
    imports: [customerRoutingModule, SharedModule],

})
export class customerModule implements OnDestroy {
    @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }

}