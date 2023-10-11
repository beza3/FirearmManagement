import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; 
@Component({
  selector: 'app-return-modal',
  templateUrl: './return-modal.component.html',
  styleUrls: ['./return-modal.component.css']
})
export class ReturnModalComponent implements OnInit{
  
  @Input() returnData: any = {}; 



  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.closeModalEvent.emit(true);
  }  

  ReturnForm: FormGroup = new FormGroup({})

  
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    ){

  } 

  ngOnInit(): void { 

    this.ReturnForm = this.formBuilder.group({
      fpId:['',],  
      manufacturerSerial: ['',],
      isFirearm: ['' ],
      dateMarked: [new Date()],
      markedBy: [''],
      firearmType: [''],
      firearmModel: [''],
      firearmMechanism: [''],
      firearmCalibre: [''],
      magazineCapacity: [''],
      manufacturer: [''],
      yearManufacture: [new Date()],
      source: [''], 
      store: [''],
      additionalComment: [''],
      reportedOn:[new Date()],
      comment:['',],  
      //the recovery part 
      firearmReturnedTo: [''],  //this will be for reason to return
      reportedBy: [''],
      authorizedBy: ['',],
      authorizedDate: [new Date()],
      //for the return part
      reasonToReturn: ['',],  

      //to display the status 
      status: ['Returned & Available'],
    }); 

   
  }

 onSubmit(){
  this.http.post('http://localhost:5141/api/Firearm', this.ReturnForm.value).subscribe(
    (response) => {
      console.log('Successfully submitted:', response);
      alert('Successfully submitted')
      // Handle success, e.g., show a success message or redirect
    },
    (error) => {
      console.error('Error:', error); 
      alert('Fail To Register')
      // Handle error, e.g., display an error message
    }
  );
 }

}
