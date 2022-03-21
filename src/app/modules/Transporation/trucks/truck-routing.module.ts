import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TruckSearchComponent } from './truck-search/truck-search.component';
import { TrucksTableComponent } from './trucks-table/trucks-table.component';


const routes: Routes = [
  {
    path: '',
    component: TruckSearchComponent,
    children: [{
      path: 'table',
      component:  TrucksTableComponent
    }]
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TrucksRoutingModule {

}