import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-officer-confirm',
  templateUrl: './officer-confirm.component.html',
  styleUrls: ['./officer-confirm.component.css']
})
export class OfficerConfirmComponent {
  @Input() childData: any = {}; 
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
