import { Component, OnInit } from '@angular/core';
import  Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service'; 

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  constructor(private dataService: FirearmService) { }

  ngOnInit(): void {
    this.loadDataAndCreateChart();
  }

  loadDataAndCreateChart(): void {
    this.dataService.getallFirearmByType().subscribe(data => {
      const firearmTypes = data.map(item => item.firearmType);
      const firearmCounts = data.map(item => item.count);

      this.createPieChart(firearmTypes, firearmCounts);
    });
  }

  createPieChart(labels: string[], data: number[]): void {
    // Clear the canvas before creating the chart
    const ctx = document.getElementById('pieChart1') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#dcc380',
            '#0c2a4ada',
            '#2a72df',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgb(200, 161, 55)',
            '#0c2a4ada',
            '#2a72df',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Firearm Types'
          }
        }
      }
    });
  }
}
