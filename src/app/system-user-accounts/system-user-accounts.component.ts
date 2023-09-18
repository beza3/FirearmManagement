import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-system-user-accounts',
  templateUrl: './system-user-accounts.component.html',
  styleUrls: ['./system-user-accounts.component.css']
})
export class SystemUserAccountsComponent {
 
  showuser = false;

  UserModal() {
    this.showuser = true;
  }

  closeuser() {
    this.showuser = true;
  }

  
  constructor(public dialog: MatDialog) {}

  openUserModal(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px', // Set the desired width of the modal
      // Add any additional configuration options here
    });
  }

}