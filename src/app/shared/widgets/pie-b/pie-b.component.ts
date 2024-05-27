import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as Highcharts from 'highcharts';  
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-pie-b',
  templateUrl: './pie-b.component.html',
  styleUrls: ['./pie-b.component.css']
})
export class PieBComponent implements OnInit {

    constructor(private firearmService: FirearmService) { }

    ngOnInit(): void {
      this.loadDataAndCreateChart();
    }  

    loadDataAndCreateChart(): void {
        this.firearmService.getFirearcmHolder().subscribe(data => {
          const source = data.map(item => item.holder);
          const firearmHolderCounts = data.map(item => item.count);  

          this.createPieChart(source, firearmHolderCounts);
        });
      }  

    createPieChart(labels: string[], data: number[]): void {
    // Clear the canvas before creating the chart
    const ctx = document.getElementById('pieChart3') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#2a72df',
            '#dcc380',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Firearm Holders'
          }
        }
      }
    });
  }
}

