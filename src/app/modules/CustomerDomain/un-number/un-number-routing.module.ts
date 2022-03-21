import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnNumberComponent } from "./un-number.component";
import { UnNumberTableComponent } from "./un-number-table/un-number-table.component";
const routes:Routes =[
    { 
      path: '',
    component: UnNumberComponent,
    children:[{
      path:'table',
      component:UnNumberTableComponent
    }]
  }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class UnNumberRoutingModule{

}