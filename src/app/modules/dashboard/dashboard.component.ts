import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 

export class DashboardComponent  { 
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


