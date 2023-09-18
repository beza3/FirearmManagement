import { Component } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent {
  displayedColumns: string[] = ['holder','serial','type','model','status','queued'];

  dataSource =
  [{
    holder:'Main Store',
    serial:'1435627',
    type:'Assault Rifile',
    model:'AK-47',
    status:'Transfer',
    queued:'Adminstrator'
  },
  {
    holder:'Main Store',
    serial:'1435627',
    type:'Assault Rifile',
    model:'AK-47',
    status:'Transfer',
    queued:'Adminstrator'
  }
  ]
  

}
