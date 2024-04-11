import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-bar-monthly',
  templateUrl: './bar-monthly.component.html',
  styleUrls: ['./bar-monthly.component.css']
})
export class BarMonthlyComponent implements OnInit { 

  monthlyLossData: any; 
  monthlyDestroyedData: any; 
  monthlyReturnedData: any; 
  monthlyRecoveredData: any; 
  monthlyWithdrawData: any;  

  @ViewChild('monthlyBarChartCanvas') monthlyBarChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | undefined;

  constructor(private firearmService: FirearmService) { }

  ngOnInit(): void {
    this.loadMonthlyLossData(); 
    this.loadMonthlyDestroyedData(); 
    this.loadMonthlyReturnedData(); 
    this.loadMonthlyRecoveredData(); 
    this.loadMonthlyWithdrawData();
  }

  loadMonthlyLossData(): void {
    this.firearmService.getallMonthlyLossFirearm().subscribe(data => {
      // Assuming data contains the loss count for the day
      this.monthlyLossData = data; // Adjust this according to your API response
      this.createBarChart();
    });
  } 
  
  loadMonthlyDestroyedData(): void {
    this.firearmService.getallMonthlyDestroyedFirearm().subscribe(data => {
      console.log('monthly Destroyed Data:', data);
      this.monthlyDestroyedData = data; // Assuming data contains the destroyed count for the day
      this.createBarChart();
    });
  }    

  loadMonthlyReturnedData(): void {
    this.firearmService.getallMonthlyReturnedFirearm().subscribe(data => {
      console.log(data); 
      this.monthlyReturnedData = data; 
      this.createBarChart();
    })
  } 

  loadMonthlyRecoveredData(): void {
    this.firearmService.getallMonthylRecoveredFirearm().subscribe(data => {
      console.log(data); 
      this.monthlyRecoveredData = data; 
      this.createBarChart();
    })
  } 

  loadMonthlyWithdrawData(): void {
    this.firearmService.getallMonthlyWithdrawFirearm().subscribe((data: any) => {
      console.log(data); 
      this.monthlyWithdrawData = data; 
      this.createBarChart();
    })
  }

  createBarChart(): void {
    if (!this.monthlyBarChartCanvas || !this.monthlyBarChartCanvas.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.monthlyBarChartCanvas.nativeElement.getContext('2d');
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
          data: [this.monthlyLossData, this.monthlyDestroyedData, this.monthlyReturnedData,this.monthlyWithdrawData,this.monthlyReturnedData],
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
            text: 'Firearm Monthly Activities'
          }
        }
      }
    });
  } 
}