import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WarehouseTableComponent } from "./warehouse-table/warehouse-table.component";
import { WarehouseComponent } from "./warehouse.component";

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    children: [{
      path: 'table',
      component: WarehouseTableComponent
    }]
  }

]
const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';

addEventListener(terminationEvent, (event) => {
  
}, {capture: true});
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class WarehouseRoutingModule {

}