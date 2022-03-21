import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerTableComponent } from "./customer-table/customer-table.component";
import { CustomerComponent } from "./customer-search/customer-search.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [{
      path: 'table',
      component: CustomerTableComponent
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
export class customerRoutingModule {

}