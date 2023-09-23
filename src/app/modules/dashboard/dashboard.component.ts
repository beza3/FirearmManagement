import { Component,OnInit } from '@angular/core';
import { FirearmService } from 'src/app/services/firearm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 

export class DashboardComponent implements OnInit { 

  totalFirearms: number = 0;
  totalMarked: number = 0;
  constructor(private firearmServices: FirearmService) { }
       
  ngOnInit(): void {
    this.firearmServices.getTotalFirearms().subscribe(
      (count) => {
        this.totalFirearms = count;
        // Handle the count as needed, e.g., update your UI
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );  

    this.firearmServices.getTotalMarked() 
      .subscribe(
      (count) => {
        this.totalMarked = count;
        // Handle the count as needed, e.g., update your UI
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );
    
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol','symbolL'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: '15-JUN-2023', name: '07:43', weight: 'some operations', symbol: 'something has changed'},
  {position: '15-JUN-2023', name: '07:43', weight: 'some operations', symbol: 'something has changed'},
  {position: '15-JUN-2023', name: '07:43', weight: 'some operations', symbol: 'something has changed'},
  {position: '15-JUN-2023', name: '07:43', weight: 'some operations', symbol: 'something has changed'},
  {position: '15-JUN-2023', name: '07:43', weight: 'some operations', symbol: 'something has changed'},
];


