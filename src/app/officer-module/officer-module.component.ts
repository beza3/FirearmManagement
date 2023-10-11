import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { ErrorPopupComponent } from '../error-popup/error-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Firearm } from '../models/Firearm.model';
import { Officer } from '../models/Officer.model';
import { FirearmService } from '../services/firearm.service';
import { PopupChild1Component } from '../popup-child1/popup-child1.component';
import { Popup1Component } from '../popup1/popup1.component';
@Component({
  selector: 'app-officer-module',
  templateUrl: './officer-module.component.html',
  styleUrls: ['./officer-module.component.css']
})
export class OfficerModuleComponent implements OnInit{
 
  officerForm!: FormGroup;
  myForm!: FormGroup; 
  showPopupFlag = 0;
  sharedData: any; 
  showPoag = false;
  sidebar: any;
  dataSource: MatTableDataSource<Firearm> = new MatTableDataSource<Firearm>() ;  


  isModalVisible: boolean = true;
  // Function to close the modal
  closeModal() {
    this.isModalVisible = false;
  } 

  @Input() childData: any = {}; //to copy the data to the officer modal

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient,
    private dataSharingService: DataSharingService,
    private dialog: MatDialog, 
    private firearmService: FirearmService) {}
                                            
  ngOnInit() {
    
    this.officerForm = this.formBuilder.group({
      // Personal Information 
      
      fullName: ['', ], 
      fpId:['',],
      title: ['', ],
      position: ['', ],
      email: ['',],
      phoneNumber: ['',],
      description: ['', ],
//firearm Detail 
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
      source: ['',], 
      store: ['',],
      oholder: ['Officer',],
      additionalComment: [''],
      // The body that registered the weapon
      registeredPosition: ['',],
      registeredFullName: ['', ],
      registeredTitle: ['', ],
      registeredEmail: ['',],
      registeredSignature: ['', ],
      registeredDate: [new Date()],     
      // The registered body
      registeredBodyFullName: ['',],
      registeredBodyResponsibility: ['',],
      registeredBodySignature: ['', ],
      registeredBodyDate: [new Date()]
    }); 
  }
 
 
  OnSubmit() {
    // Send the payload to your API to create a new firearm record
    this.http.post('http://localhost:5141/api/Officer', this.officerForm.value).subscribe(
      (response: any) => {
        console.log('Successfully submitted:', response);
    
        // After successful submission, get the ID of the created firearm
        const createdFirearmId = response.id;
        console.log('Created Firearm ID:', createdFirearmId);
        // Use the service method to delete the firearm by ID
        this.deleteFirearmById(createdFirearmId);
        this.showSuccessPopup();
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Register');
      }
    );
  }
            
  deleteFirearmById(id: number) {
    this.firearmService.deleteFirearmById(id).subscribe(
      () => {
        console.log('Firearm deleted successfully.');
      },
      (error) => {
        console.error('Error deleting firearm:', error);
      }
    );
  }


showSuccessPopup() {
  this.dialog.open(SuccessPopupComponent, {
    width: '300px', // You can adjust the width as needed
  })
}

showErrorPopup() {
  const dialogRef = this.dialog.open(ErrorPopupComponent, {
    width: '300px', // You can adjust the width as needed
  });

  dialogRef.afterClosed().subscribe(() => {
    // Handle the error popup close event if needed
  }); 

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

