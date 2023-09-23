import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
    Highcharts = Highcharts;
    chartOptions = {};
  
  constructor() {

  } 
  ngOnInit() {
  this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          backgroundColor: '#f1f1f1',
          size: 600,
          borderRadius: '10px'
      },
      title: {
          text: 'Firearm By Type',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting:{
        enabled: false
      },
      credit:{
        enabled: true
      },
      series: [{
          name: 'Firearm By Type ',
          colorByPoint: true,
          data: [{
              name: 'Assault rifle',
              y: 70.67,
              color:'#0c3d4c',
              sliced: true,
              selected: true
          }, {
              name: 'portable tank',
              color:'#dcc380',
              y: 14.77
          },  {
              name: 'acid tank',
              color:'#7394d3',
              y: 4.86
          }, {
              name: 'gun pistol',
              color:'#a8a9a8',
              y: 2.63
          }]
      }]
  }
  }
  }

