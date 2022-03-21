import { ElementRef,HostListener,NgModule, OnDestroy } from "@angular/core";
import { AddyardsComponent } from "./add-yards/add-yards.component";
import { YardsTableComponent } from "./yards-table/yards-table.component";
import { YardsComponent } from "./yards-search/yards-search.component";
import { yardsRoutingModule } from "./yards-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations: [
        YardsComponent,
        YardsTableComponent,
        AddyardsComponent,

    ],
    imports: [yardsRoutingModule, SharedModule],

})
export class yardsModule implements OnDestroy {
    @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }

}