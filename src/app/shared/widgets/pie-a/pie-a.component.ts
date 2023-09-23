import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-widget-pie-a',
  templateUrl: './pie-a.component.html',
  styleUrls: ['./pie-a.component.css']
})
export class PieAComponent {

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
        text: 'Firearm By Source',
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
            name: 'Amnesty',
            y: 70,
            color:'#0c3d4c',
            sliced: true,
            selected: true
        }, {
            name: 'importation',
            color:'#dcc380',
            y: 30
        } , {
            name: 'Disarmament',
            color:'#7394d3',
            y: 30
        }

        ]
}]
}
}
}

