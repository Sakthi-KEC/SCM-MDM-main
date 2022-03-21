import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OfficeTableComponent } from "./office-table/office-table.component";
import { OfficeComponent } from "./office-search/office-search.component";

const routes: Routes = [
  {
    path: '',
    component: OfficeComponent,
    children: [{
      path: 'table',
      component: OfficeTableComponent
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
export class officeRoutingModule {

}