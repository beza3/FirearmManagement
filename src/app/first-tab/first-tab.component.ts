import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.css']
})
export class FirstTabComponent {
  signupForm: FormGroup;

  @Output() closeuser = new EventEmitter<boolean>();


  constructor(public dialogRef: MatDialogRef<FirstTabComponent>,private FormBuilder: FormBuilder, private formBuilder: FormBuilder, private http: HttpClient) {
    
    this.signupForm = this.formBuilder.group({
      firstname: [''],
      middlename: [''],
      lastname: [''],
      efpid: [''],
           job: [''],
      jobtype: [''],
      unit: [''],
      organization: ['']
    });
  }
  onClose(): void {
    this.dialogRef.close();
  }
  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;

  // ... other component code ...

  goToSecondTab() {
    // Select the second tab
    this.tabGroup.selectedIndex = 1;
  } 
   
  signup() {
    console.log(this.signupForm.value);
    const formData = this.signupForm.value;
    this.http.get<any>('http://localhost:3000/signup').subscribe(
      (      response: any) => {
        console.log('Data sent successfully:', response);
        this.signupForm.reset();
      },
      (      error: any) => {
        console.error('Error sending data:', error);
      }
    );
  } 
 
}
