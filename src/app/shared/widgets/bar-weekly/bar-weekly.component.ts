import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-bar-weekly',
  templateUrl: './bar-weekly.component.html',
  styleUrls: ['./bar-weekly.component.css']
})
export class BarWeeklyComponent implements OnInit {
  weeklyLossData: any; 
  weeklyDestroyedData: any; 
  weeklyReturnedData: any; 
  weeklyRecoveredData: any; 
  weeklyWithdrawData: any;  

  @ViewChild('weeklyBarChartCanvas') weeklyBarChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | undefined;

  constructor(private firearmService: FirearmService) { }

  ngOnInit(): void {
    this.loadWeeklyLossData(); 
    this.loadWeeklyDestroyedData(); 
    this.loadWeeklyReturnedData(); 
    this.loadWeeklyRecoveredData(); 
    this.loadWeeklyWithdrawData();
  }

  loadWeeklyLossData(): void {
    this.firearmService.getallWeekllyLossFirearm().subscribe(data => {
      // Assuming data contains the loss count for the day
      this.weeklyLossData = data; // Adjust this according to your API response
      this.createBarChart();
    });
  } 
  
  loadWeeklyDestroyedData(): void {
    this.firearmService.getallWeeklyDestroyedFirearm().subscribe(data => {
      console.log('Daily Destroyed Data:', data);
      this.weeklyDestroyedData = data; // Assuming data contains the destroyed count for the day
      this.createBarChart();
    });
  }    

  loadWeeklyReturnedData(): void {
    this.firearmService.getallWeeklyReturnedFirearm().subscribe(data => {
      console.log(data); 
      this.weeklyReturnedData = data; 
      this.createBarChart();
    })
  } 

  loadWeeklyRecoveredData(): void {
    this.firearmService.getallWeeklyRecoveredFirearm().subscribe(data => {
      console.log(data); 
      this.weeklyRecoveredData = data; 
      this.createBarChart();
    })
  } 

  loadWeeklyWithdrawData(): void {
    this.firearmService.getallweeklyWithdrawFirearm().subscribe((data: any) => {
      console.log(data); 
      this.weeklyWithdrawData = data; 
      this.createBarChart();
    })
  }

  createBarChart(): void {
    if (!this.weeklyBarChartCanvas || !this.weeklyBarChartCanvas.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.weeklyBarChartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found.');
      return;
    }

    if (this.barChart) {
      this.barChart.destroy(); // Destroy existing chart if it exists
    }

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Loss', 'Destruction', 'Return', 'withdraw', 'Recovery'],
        datasets: [{
          label: 'Count',
          data: [this.weeklyLossData, this.weeklyDestroyedData, this.weeklyReturnedData,this.weeklyWithdrawData,this.weeklyReturnedData],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Loss color
            'rgba(54, 162, 235, 0.2)', 
            'blue', 
            'golden', 
            'purple' // Destroyed color
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          } 
        } , 
        plugins: {
          title: {
            display: true,
            text: 'Firearm Weekly Activities'
          }
        }
      }
    });
  } 
}
