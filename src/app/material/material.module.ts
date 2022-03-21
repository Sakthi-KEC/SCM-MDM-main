import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatBadgeModule} from '@angular/material/badge'
import { MatListModule} from '@angular/material/list'
import { MatCardModule} from '@angular/material/card'
import { MatTabsModule} from '@angular/material/tabs'
import { MatStepperModule} from '@angular/material/stepper'
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatGridListModule} from '@angular/material/grid-list'
import { MatExpansionModule} from '@angular/material/expansion'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';

const Material =[
  MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableExporterModule
    
]

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports:[
    Material
  ]
})
export class MaterialModule { }
