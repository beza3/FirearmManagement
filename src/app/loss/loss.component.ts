import { Component } from '@angular/core';

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent {
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
  }, 
``
  ]
  

}

        
    
