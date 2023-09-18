import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})

export class OfficerComponent implements OnInit{

  option1: string = "";
  option2: string = "";
  option3: string = "";
  transferredData: any[] = []; 
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.showReturn = false;
  } 
  showReturn = false;
  sidebar: any;
  
  openReturn() {
      this.showReturn = true;
    }
  
    
    


constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) {}
// second.component.ts
ngOnInit(): void {
  this.sharedService.transferredData$.subscribe(data => {
    this.transferredData = data;
    this.cdr.detectChanges(); 
    console.log("the data transfered")
  });
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
function openModel() {
  throw new Error('Function not implemented.');

  } 