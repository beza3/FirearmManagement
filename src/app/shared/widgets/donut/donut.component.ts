import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import HC_3d from 'highcharts/highcharts-3d';

HC_exporting(Highcharts);
HC_exportData(Highcharts);
HC_3d(Highcharts);


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {
    // Initialize the 3D module
  }

 
  ngOnInit() {
    // Define custom colors
    const customColors = [
      '#dcc380', // Red
      '#0c2a4a', // Green
      '#7394d3',
      '#c3dcc3',
      '#4b7d81' // Blue
      // Add more colors as needed
    ];

    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0,
        
        }
      },
      title: {
        text: 'Total Firearm in 5 Years',
        align: 'left'
      },
      subtitle: {
        text: '',
        align: 'left'
      },
      plotOptions: {
        pie: {
          innerSize: '50%',
          depth: 45,
          colors: customColors, // Assign custom colors to data points
        }
      },
      series: [{
        name: 'Medals',
        data: [
          { name: '2016', y: 16, color: customColors[0] },
          { name: '2017', y: 12, color: customColors[1] },
          { name: '2018', y: 8, color: customColors[2] },
          { name: '2019', y: 8, color: customColors[3] },
          { name: '2020', y: 8, color: customColors[4] },
        
          // Add more data points with custom colors
        ]
      }]
    };
  }
}
