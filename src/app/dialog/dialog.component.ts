import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; 
import { DataTableComponent } from '../data-table/data-table.component';
import { Firearm } from '../models/Firearm.model';
import { FormControl } from '@angular/forms';
import { FirearmService } from '../services/firearm.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      manufacturerSerial: ['', Validators.required],
      isFirearm: [false, Validators.required],
      assignedSerial: [''],
      dateMarked: [new Date(), Validators.required],
      markedBy: [''],
      firearmType: [''],
      firearmModel: [''],
      firearmMechanism: [''],
      firearmCalibre: [''],
      magazineCapacity: [''],
      manufacturer: [''],
      yearManufacture: [new Date().getFullYear()],
      source: [''],
      store: [''],
      additionalComment: ['']
    });
  }

  OnSubmit() {
 
      // Send the payload to your API
      this.http.post('http://localhost:5141/api/Firearm', this.myForm.value).subscribe(
        (response) => {
          console.log('Successfully submitted:', response);
          // Handle success, e.g., show a success message or redirect
        },
        (error) => {
          console.error('Error:', error);
          // Handle error, e.g., display an error message
        }
      );
    }
  }

  
