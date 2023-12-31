import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie-b',
  templateUrl: './pie-b.component.html',
  styleUrls: ['./pie-b.component.css'],
})
export class PieBComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private http: HttpClient) {}

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
              name: 'Firearm By Pwner',
              colorByPoint: true,
              data: [{
                  name: 'officer',
                  y: 70,
                  color:'#0c3d4c',
                  sliced: true,
                  selected: true
              }, {
                  name: 'civillian',
                  color:'#dcc380',
                  y: 30
              } , {
                  name: 'Organisations',
                  color:'#7394d3',
                  y: 30
              }
      
              ]
      }]
      }
    }
  }