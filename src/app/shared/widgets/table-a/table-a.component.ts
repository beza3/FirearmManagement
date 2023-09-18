import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.css']
})
export class TableAComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  
];


