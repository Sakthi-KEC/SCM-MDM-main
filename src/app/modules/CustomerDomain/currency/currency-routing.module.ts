import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CurrencySearchComponent } from "./currency-search/currency-search.component";
import { CurrencyTableComponent } from "./currency-table/currency-table.component";


const routes: Routes = [
  {
    path: '',
    component: CurrencySearchComponent,
    children: [{
      path: 'table',
      component: CurrencyTableComponent
    }]
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CurrencyRoutingModule {

}