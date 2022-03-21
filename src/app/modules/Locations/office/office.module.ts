import { ElementRef,HostListener,NgModule, OnDestroy } from "@angular/core";
import { AddOfficeComponent } from "./add-office/add-office.component";
import { OfficeTableComponent } from "./office-table/office-table.component";
import { OfficeComponent } from "./office-search/office-search.component";
import { officeRoutingModule } from "./office-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations: [
        OfficeComponent,
        OfficeTableComponent,
        AddOfficeComponent,

    ],
    imports: [officeRoutingModule, SharedModule],

})
export class officeModule implements OnDestroy {
    @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }

}