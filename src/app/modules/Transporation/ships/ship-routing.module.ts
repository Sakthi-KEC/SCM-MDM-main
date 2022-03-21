import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShipsComponent } from "./ships-search/ships.component";
import { ShipsTableComponent } from "./ships-table/ships-table.component";


const routes: Routes = [
  {
    path: '',
    component: ShipsComponent,
    children: [{
      path: 'table',
      component:  ShipsTableComponent
    }]
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ShipsRoutingModule {

}