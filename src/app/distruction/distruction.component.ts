import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-distruction',
  templateUrl: './distruction.component.html',
  styleUrls: ['./distruction.component.css']
})
export class DistructionComponent {

confirmdestructionForm=this.fb.group({
  destructiondate:['',Validators.required],
  venue:['',Validators.required],
  destructionrequestedby:['',Validators.required],
  reasonfordestruction:['',Validators.required],
  authorizedby:['',Validators.required],
  referencenumber:['',Validators.required],
  authorizationdate:['',Validators.required],

});
isSubmitted=false;
constructor(private fb:FormBuilder){

}
onSubmit():void{
  console.log('submitted form',this.confirmdestructionForm.value,
  this.confirmdestructionForm.invalid);
  this.isSubmitted=true;
}






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
