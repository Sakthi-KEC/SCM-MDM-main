import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrainsComponent } from "./trains-search/trains.component";
import { TrainsTableComponent } from "./trains-table/trains-table.component";


const routes: Routes = [
  {
    path: '',
    component: TrainsComponent,
    children: [{
      path: 'table',
      component:  TrainsTableComponent
    }]
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TrainsRoutingModule {

}