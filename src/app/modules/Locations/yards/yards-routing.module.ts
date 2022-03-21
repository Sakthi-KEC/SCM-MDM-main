import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YardsTableComponent } from "./yards-table/yards-table.component";
import { YardsComponent } from "./yards-search/yards-search.component";

const routes: Routes = [
  {
    path: '',
    component: YardsComponent,
    children: [{
      path: 'table',
      component: YardsTableComponent
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
export class yardsRoutingModule {

}