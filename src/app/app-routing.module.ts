

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';



const routes: Routes = [{
 path: '',
  component: DefaultComponent, 
  children:[{
    path:'unnumber',
    loadChildren: () => import('./modules/CustomerDomain/un-number/un-number.module').then(m =>m.UnNumberModule)
  },
  {
    path:'commodity',
    loadChildren: () => import('./modules/CustomerDomain/commodity/commodity.module').then(m =>m.CommodityModule)

  },
  {
    path:'currency',
    loadChildren: () => import('./modules/CustomerDomain/currency/currency.module').then(m =>m.CurrencyModule)
  } ,
  {
    path:'trucks',
    loadChildren: () => import('./modules/Transporation/trucks/trucks.module').then(m =>m.TrucksModule)
  },
  {
    path:'ships',
    loadChildren: () => import('./modules/Transporation/ships/ships.module').then(m =>m.ShipsModule)
  },
  {
    path:'trains',
    loadChildren: () => import('./modules/Transporation/trains/trains.module').then(m =>m.TrainsModule)
  } ,
  {
    path:'flights',
    loadChildren: () => import('./modules/Transporation/flights/flights.module').then(m =>m.flightsModule)
  },
  {
    path:'warehouse',
    loadChildren: () => import('./modules/Locations/warehouse/warehouse.module').then(m =>m.warehouseModule)
  },
  {
    path:'yards',
    loadChildren: () => import('./modules/Locations/yards/yards.module').then(m =>m.yardsModule)
  },
  {
    path:'office',
    loadChildren: () => import('./modules/Locations/office/office.module').then(m =>m.officeModule)
  },
  {
    path:'customer',
    loadChildren: () => import('./modules/CustomerDomain/customer/customer.module').then(m =>m.customerModule)
  },
 
],
    
},
 ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
