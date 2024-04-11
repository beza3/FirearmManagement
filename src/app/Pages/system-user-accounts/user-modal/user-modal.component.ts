import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
})
export class UserModalComponent {
  signupForm: FormGroup;
  signuser: any;
  isInputReadOnly = true; // Initialize to true to make the input initially readonly
  inputValue = '';
  Loginicon: string = '';

  updateInput(event: Event) {
    const selectedCheckbox = event.target as HTMLInputElement;
    this.Loginicon = selectedCheckbox.nextElementSibling?.textContent || '';
  }
  @Output() closeuser = new EventEmitter<boolean>();
  encryptedData!: string;

  constructor(
    public dialogRef: MatDialogRef<UserModalComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.signupForm = this.formBuilder.group({
      firstname: [''],
      middlename: [''],
      lastname: [''],
      efpid: [''],
      job: [''],
      unit: [''],
      extension: [''],
      mobile: [''],
      email: [''],
      accounttype: [''],
      Loginicon: [''],
      username: [''],
      password: [''],
      // ... other form fields ...
    });
  }

  signup() {
    console.log(this.signupForm.value);

    this.http
      .post('http://localhost:3000/signup1', this.signupForm.value)
      .subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
          this.signupForm.reset();
          alert('sucsse'); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
  }

  onClose(): void {
    // Handle closing the modal
    this.dialogRef.close();
  }
}

// Add other methods or event handlers as needed
