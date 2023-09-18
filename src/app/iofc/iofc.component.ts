import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-iofc',
  templateUrl: './iofc.component.html',
  styleUrls: ['./iofc.component.css']
})
export class IofcComponent {


showiofc = false;


  openiofc() {
    this.showiofc = true;
  }

  closeModal() {
    this.showiofc = false;
  }
   
  formValue !: FormGroup;
  firearmRegistryModelObj:any;
  firearmRegistryData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  
  constructor(private dialog : MatDialog, private formBuilder: FormBuilder) { 

  } 
    
  

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      ref : [''],
      firearm : [''],
      serialNo : [''],
      holder : [''],
      status : [''],

    });
    this.firearmRegistryModelObj={};
    
  }
  clickAddFirearmRegistry(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
postFirearmRegistryDetails():void{
  this.firearmRegistryModelObj.ref = this.formValue.value.ref;
  this.firearmRegistryModelObj.firearm = this.formValue.value.firearm;
  this.firearmRegistryModelObj.serialNo = this.formValue.value.serialNo;
  this.firearmRegistryModelObj.holder = this.formValue.value.holder;
  this.firearmRegistryModelObj.status = this.formValue.value.status;
 }  

 showPopupFlag = 0;

 showPopup(popupNumber: number) {
   this.showPopupFlag = popupNumber;
 }
 
 hidePopup() {
   this.showPopupFlag = 1;
   this.showPopupFlag = 2;
   this.showPopupFlag = 3;
 }

}
