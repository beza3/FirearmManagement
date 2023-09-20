import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-officer-module',
  templateUrl: './officer-module.component.html',
  styleUrls: ['./officer-module.component.css']
})
export class OfficerModuleComponent implements OnInit{ 

  officerForm!: FormGroup;
    
  


  @Output() closeModal = new EventEmitter<boolean>();

  onCloseModal() {
    this.closeModal.emit(true);
  }
  
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,) {}

  ngOnInit() {
    this.officerForm = this.formBuilder.group({
      // Personal Information
      fullName: ['', Validators.required],
      title: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required],

      // The body that registered the weapon
      registeredPosition: ['', Validators.required],
      registeredFullName: ['', Validators.required],
      registeredTitle: ['', Validators.required],
      registeredEmail: ['', [Validators.required, Validators.email]],
      registeredSignature: ['', Validators.required],
      registeredDate: ['', Validators.required],

      // The registered body
      registeredBodyFullName: ['', Validators.required],
      registeredBodyResponsibility: ['', Validators.required],
      registeredBodySignature: ['', Validators.required],
      registeredBodyDate: ['', Validators.required],
    });
  }
 
//OnSubmit Button will be here 

OnSubmit() {
  // Send the payload to your API
  this.http.post('http://localhost:5141/api/Officer', this.officerForm.value).subscribe(
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

  

