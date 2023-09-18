import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent {
   

  @Output() closecivil = new EventEmitter<boolean>();

  onClosecivil() {
    this.closecivil.emit(true);
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
