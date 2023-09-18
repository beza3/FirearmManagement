import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 


@Component({
  selector: 'app-widget-pie-b',
  templateUrl: './pie-b.component.html',
  styleUrls: ['./pie-b.component.css']
})
export class PieBComponent {


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
        size: 600
    },
    title: {
        text: 'Firearm Type By Ownership',
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
            name: 'Officer',
            y: 50,
            color:'#0c3d4c',
            sliced: true,
            selected: true
        }, {
            name: 'Civillian',
            color:'#dcc380',
            y: 25
        },  {
            name: 'Soldiers',
            color:'#7394d3',
            y: 25
        }, ]
    }]
}
}
}
