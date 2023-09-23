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
    this.fetchOfficerCountAndUpdateChart();
  }

  fetchOfficerCountAndUpdateChart() {
    // Make an HTTP request to your API to fetch the total officer count
    this.http.get<number>('http://localhost:5141/api/Officer/total-officer').subscribe(
      (totalOfficers) => {
        // Update the pie chart with the retrieved officer count
        this.chartOptions = {
            chart: {
              type: 'pie',
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              backgroundColor: '#f1f1f1',
              size: 600,
              borderRadius: '10px',
            },
            title: {
              text: 'Firearm Type By Ownership',
              align: 'left',
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            },
            accessibility: {
              point: {
                valueSuffix: '%',
              },
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
              },
            },
            exporting: {
              enabled: false,
            },
            credit: {
              enabled: true,
            },
            series: [
              {
                name: 'Firearm By Type',
                colorByPoint: true,
                data: [
                  {
                    name: 'Officer',
                    y: totalOfficers, // Use the retrieved officer count here
                    color: '#0c3d4c',
                    sliced: true,
                    selected: true,
                  },
                  {
                    name: 'Civillian',
                    color: '#dcc380',
                    y: 25,
                  },
                  {
                    name: 'Soldiers',
                    color: '#7394d3',
                    y: 25,
                  },
                ],
              },
            ],
          };
        },
        (error) => {
          console.error('Error fetching officer count', error);
        } 

    );
  }
}