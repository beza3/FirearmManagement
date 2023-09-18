import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-officer-module',
  templateUrl: './officer-module.component.html',
  styleUrls: ['./officer-module.component.css']
})
export class OfficerModuleComponent implements OnInit{ 

  
    confirmationMessage: string = 'Are you sure you want to proceed?';
    showConfirmationDialog: boolean = false;
  
    openConfirmationDialog() {
      this.showConfirmationDialog = true;
    }
  
    handleConfirmation(confirmed: boolean) {
      if (confirmed) {
        // User clicked "Yes"
        // Implement your logic here
      } else {
        // User clicked "No" or closed the dialog
      }
      this.showConfirmationDialog = false; // Close the dialog
    }
  


  @Output() closeModal = new EventEmitter<boolean>();

  onCloseModal() {
    this.closeModal.emit(true);
  }
  
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
