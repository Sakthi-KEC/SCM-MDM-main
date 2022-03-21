import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightsComponent } from "./flights-search/flights.component";
import { FlightsTableComponent } from "./flights-table/flights-table.component";


const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [{
      path: 'table',
      component:  FlightsTableComponent
    }]
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FlightsRoutingModule {

}