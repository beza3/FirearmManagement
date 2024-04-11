import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-bar-yearly',
  templateUrl: './bar-yearly.component.html',
  styleUrls: ['./bar-yearly.component.css']
}) 

export class BarYearlyComponent implements OnInit { 

  yearlyLossData: any; 
  yearlyDestroyedData: any; 
  yearlyReturnedData: any; 
  yearlyRecoveredData: any; 
  yearlyWithdrawData: any;  

  @ViewChild('yearlyBarChartCanvas') yearlyBarChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | undefined;

  constructor(private firearmService: FirearmService) { }

  ngOnInit(): void {
    this.loadYearlyLossData(); 
    this.loadYearlyDestroyedData(); 
    this.loadYearlyReturnedData(); 
    this.loadYearlyRecoveredData(); 
    this.loadYearlyWithdrawData();
  }

  loadYearlyLossData(): void {
    this.firearmService.getallYearlyLossFirearm().subscribe(data => {
      // Assuming data contains the loss count for the day
      this.yearlyLossData = data; // Adjust this according to your API response
      this.createBarChart();
    });
  } 
  
  loadYearlyDestroyedData(): void {
    this.firearmService.getallYearlyDestroyedFirearm().subscribe(data => {
      console.log('Daily Destroyed Data:', data);
      this.yearlyDestroyedData = data; // Assuming data contains the destroyed count for the day
      this.createBarChart();
    });
  }    

  loadYearlyReturnedData(): void {
    this.firearmService.getallYearlyReturnedFirearm().subscribe(data => {
      console.log(data); 
      this.yearlyReturnedData = data; 
      this.createBarChart();
    })
  } 

  loadYearlyRecoveredData(): void {
    this.firearmService.getallYearlyRecoveredFirearm().subscribe(data => {
      console.log(data); 
      this.yearlyRecoveredData = data; 
      this.createBarChart();
    })
  } 

  loadYearlyWithdrawData(): void {
    this.firearmService.getallYearlyWithdrawFirearm().subscribe((data: any) => {
      console.log(data); 
      this.yearlyWithdrawData = data; 
      this.createBarChart();
    })
  }

  createBarChart(): void {
    if (!this.yearlyBarChartCanvas || !this.yearlyBarChartCanvas.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.yearlyBarChartCanvas.nativeElement.getContext('2d');
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
          data: [this.yearlyLossData, this.yearlyDestroyedData, this.yearlyReturnedData,this.yearlyWithdrawData,this.yearlyReturnedData],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Loss color
            'rgba(54, 162, 235, 0.2)', 
            'blue', 
            'golden', 
            'purple' // Destroyed color
          ],
          borderColor: [
        
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
            text: 'Firearm Yearly Activities'
          }
        }
      }
    });
  } 
}