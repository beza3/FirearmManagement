import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; 
import { DataTableComponent } from '../../../data-table/data-table.component';
import { Firearm } from '../../../Core/models/Firearm.model';
import { FormControl } from '@angular/forms';
import { FirearmService } from '../../../Core/services/firearm.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 

  isModalVisible: boolean = true;

  // Function to close the modal
  closeModal() {
    this.isModalVisible = false;
  } 

  myForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({ 
      manufacturerSerial: ['',],
      isFirearm: [false, ],
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
      //for the recovery
      firearmReturnedTo: [''], 
      reportedBy: ['',],
      authorizedBy: ['',],
      authorizedDate: [new Date()],
      reasonToReturn: ['',], 
      //to display the status 
      status: ['New',], 
      holder:[],
    });
  }
 

  OnSubmit() {
      // Send the payload to your API
      this.http.post('http://localhost:5000/api/Firearm', this.myForm.value).subscribe(
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