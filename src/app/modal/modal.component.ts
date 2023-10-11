import { Component, EventEmitter, Output } from '@angular/core';
import { FirearmService } from '../services/firearm.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  person = {
    name: 'Abraham Shiferaw Girma',
    designation: 'System Administrator',
    picture: 'assets/OIP.jpg', 
    
    
  // Replace with the path to the ID card picture
  Username: 'Abraham',
  EFPID: '1704/12',
  Unit:'  Federal Police',
  Email:'  x@gmail.com',
  Extension:' 1573 ',
 
    // Add more details as needed
  };

  @Output() closeModal = new EventEmitter<boolean>();
 

  onCloseModal() {
    this.closeModal.emit(true); 

  } 
  user: any;

  constructor(private firearmService: FirearmService) {
    this.user = this.firearmService.getUser();
  }
}
