import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup1',
  templateUrl: './popup1.component.html',
  styleUrls: ['./popup1.component.css']
})
export class Popup1Component {
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  } 
  showPoag = false;
  sidebar: any;
  
    openPoag() {
      this.showPoag = true;
    }
  
    
    
    closeModal() {
      this.showPoag = false;
    }
  
}
