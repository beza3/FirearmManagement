import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-officer-module',
  templateUrl: './officer-module.component.html',
  styleUrls: ['./officer-module.component.css']
})
export class OfficerModuleComponent implements OnInit{
  receiveDataFromParent(copiedData: any) {
    throw new Error('Method not implemented.');
  } 

  officerForm!: FormGroup;
  showPopupFlag = 0;
  sharedData: any; 
  showPoag = false;
  sidebar: any;
  
    openPoag() {
      this.showPoag = true;
    }
  
    
    
    

  @Input() childData: any;

  @Output() closeModal = new EventEmitter<boolean>();

  onCloseModal() {
    this.closeModal.emit(true);
  }
  
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.sharedData = this.dataSharingService.sharedData;
    this.officerForm = this.formBuilder.group({
      // Personal Information
      fullName: ['', ],
      title: ['', ],
      position: ['', ],
      email: ['',],
      phoneNumber: ['',],
      description: ['', ],
//firearm Detail 
manufacturerSerial: ['',],
firearmType: [''],
firearmModel: [''],
firearmMechanism: [''],
firearmCalibre: [''],
magazineCapacity: [''],
manufacturer: [''],
yearManufacture: [new Date().getFullYear()],
source: [''],
      // The body that registered the weapon
      registeredPosition: ['',],
      registeredFullName: ['', ],
      registeredTitle: ['', ],
      registeredEmail: ['',],
      registeredSignature: ['', ],
      registeredDate: ['',],
      // The registered body
      registeredBodyFullName: ['',],
      registeredBodyResponsibility: ['',],
      registeredBodySignature: ['', ],
      registeredBodyDate: ['',],
    });
  }
 
//OnSubmit Button will be here 

OnSubmit() {
  // Send the payload to your API
  this.http.post('http://localhost:5141/api/Officer', this.officerForm.value).subscribe(
    (response) => {
      console.log('Successfully submitted:', response); 
      alert('data sent');
      // Handle success, e.g., show a success message or redirect
    },
    
    (error) => {
      console.error('Error:', error);
      // Handle error, e.g., display an error message
    }
  );
}
showPopup(popupNumber: number): void {
  this.showPopupFlag = popupNumber;
}

hidePopup(): void {
  this.showPopupFlag = 1;
  this.showPopupFlag = 2;
  this.showPopupFlag = 3;
}
  }

