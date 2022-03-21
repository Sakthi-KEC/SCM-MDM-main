import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommodityTableComponent } from "./commodity-table/commodity-table.component";
import { CommodityComponent } from "./commodity.component";

const routes: Routes = [
  {
    path: '',
    component: CommodityComponent,
    children: [{
      path: 'table',
      component: CommodityTableComponent
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
export class CommodityRoutingModule {

}