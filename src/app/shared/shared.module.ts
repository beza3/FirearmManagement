import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './widgets/bar/bar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { PieAComponent } from './widgets/pie-a/pie-a.component';
import { PieBComponent } from './widgets/pie-b/pie-b.component';
import { TableAComponent } from './widgets/table-a/table-a.component';
import { TableBComponent } from './widgets/table-b/table-b.component';
import { MatTableModule } from '@angular/material/table';
import { DonutComponent } from './widgets/donut/donut.component';

@NgModule({
  declarations: [
    BarComponent,
    CardComponent,
    PieComponent,
    PieAComponent,
    PieBComponent,
    TableAComponent,
    TableBComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatTableModule
  
  ],
  exports: [
    CardComponent,
    PieComponent,
    PieAComponent,
    PieBComponent,
    TableAComponent,
    TableBComponent,
    DonutComponent,
    BarComponent

  ]
})
export class SharedModule { } 
