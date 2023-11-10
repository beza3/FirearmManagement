import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Specify the chartOptions type
  chart!: Highcharts.Chart;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: '#f1f1f1',

      },
      title: {
        text: 'Firearm Activity',
        align: 'left'
      },
      xAxis: {
        categories: ['Withdraw', 'Loss', 'Recovery', 'Destruction', 'Export']
      },
      yAxis: {
        title: {
          text: 'Firearm'
        }
      },
      tooltip: {
        valueSuffix: ' Firearm'
      },
      plotOptions: {
        series: {
    
        }
      },
      series: [{
        type: 'column',
        name: 'Day',
        color: '#dcc380',
        data: [33, 5, 12, 24, 16]
      }, {
        type: 'column',
        name: 'Week',
        color: '#0c2a4c',
        data: [65, 34, 25, 24, 16]
      }, {
        type: 'column',
        name: 'Month',
        color: '#7394d3',
        data: [43, 12, 75, 25, 17]
      }, {
        type: 'column',
        name: 'Year',
        color: '#4b7d81',
        data: [18, 88, 7, 29, 16]
      }, {
        type: 'spline',
        name: 'Average',
        color: '#20A4DD',
        data: [47,33, 21, 23, 17],
        marker: {
          lineWidth: 2,
          fillColor: 'white'
        }
      }]
    };

    // Initialize the chart
    this.chart = Highcharts.chart('your-chart-container', this.chartOptions);

    this.getDayOfficerCount();
  }

  getDayOfficerCount() {
    this.http.get<number>('http://localhost:5141/api/Officer/total-officer').subscribe(
      (count) => {
        // Update your chart data here with the retrieved officer count
        const newData = [count, count, count, count, count]; // Assuming "Day" is the first category

        // Use the update method to set new data for the "Day" series
        this.chart.series[0].update({
          data: newData,
          type: 'column'
        });

        // Optional: You can also update the title to reflect the new data
        this.chart.setTitle({ text: `Firearm Activity (Day: ${count})` });
      },
      (error) => {
        console.error('Error fetching officer count', error);
      }
    );
  }
}
