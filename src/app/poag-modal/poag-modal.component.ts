import { Component, EventEmitter, Output } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poag-modal',
  templateUrl: './poag-modal.component.html',
  styleUrls: ['./poag-modal.component.css']
})
export class PoagModalComponent { 

  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.closeModalEvent.emit(true);
  }
  
  
  option1: string = "";
  option2: string = "";
  option3: string = "";
   
  
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      full_name: ['', Validators.required],
      title: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      comment: ['', Validators.required],
      nameOfOrganization: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // You can also send the form data to a server using HTTP requests.
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
