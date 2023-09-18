import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



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
