import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent { 
  chartOptions!: {};  
  Highcharts = Highcharts;
 constructor() {

 } 
  ngOnInit() {
    this.chartOptions = {
      title: {
          text: 'Firearm Activity',
          align: 'left'
      },
      xAxis: {
          categories: ['Transfer', 'Loss', 'Recovery', 'Distruction', 'Export']
      },
      yAxis: {
          title: {
              text: 'Firearm'
          }
      },
      tooltip: {
          valueSuffix: 'Firearm'
      },
      plotOptions: {
          series: {
              borderRadius: '25%'
          }
      },
      series: [{
          type: 'column',
          name: 'Day',
          color: '#dcc380',
          data: [100, 234, 65, 228, 184]
      }, {
          type: 'column',
          name: 'Week',
          color: '#0c2a4c',
          data: [89, 345, 125, 240, 167]
      }, {
          type: 'column',
          name: 'Month',
          color: '#7394d3',
          data: [58, 123, 75, 250, 176]
      },
      {
        type: 'column',
        name: 'Year',
        color: '#4b7d81',
        data: [58, 88, 75, 290, 16]
    }, {
          type: 'spline',
          name: 'Average',
          color: '#20A4DD',
          data: [47, 83.33, 70.66, 239.33, 175.66],
          marker: {
              lineWidth: 2,
              
              fillColor: 'white'
          }
      
      }]
  }
  }
}
