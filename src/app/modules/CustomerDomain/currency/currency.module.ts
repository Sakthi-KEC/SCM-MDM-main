
import { NgModule } from "@angular/core";
import { AddCurrencyConversionComponent } from "./add-currency-conversion/add-currency-conversion.component";
import { AddRoundingOffComponent } from "./add-rounding-off/add-rounding-off.component";
import { CalculateComponent } from "./calculate/calculate.component";
import { CurrencyRoutingModule } from "./currency-routing.module";
import { CurrencySearchComponent } from "./currency-search/currency-search.component";
import { CurrencyTableComponent } from "./currency-table/currency-table.component";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
    declarations:[
    CurrencySearchComponent,
    CurrencyTableComponent,
    AddCurrencyConversionComponent,
    AddRoundingOffComponent,
    CalculateComponent
    ],
    imports: [CurrencyRoutingModule,SharedModule],
    
})
export class CurrencyModule{

}