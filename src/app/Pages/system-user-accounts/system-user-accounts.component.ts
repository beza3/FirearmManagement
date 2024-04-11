import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from './user-modal/user-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { User } from 'src/app/Core/models/Users.mode';

@Component({
  selector: 'app-system-user-accounts',
  templateUrl: './system-user-accounts.component.html',
  styleUrls: ['./system-user-accounts.component.css']
})
export class SystemUserAccountsComponent implements OnInit {
 
  showuser = false;
  errorMessage!: string;

  UserModal() {
    this.showuser = true;
  }

  closeuser() {
    this.showuser = true;
  }

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>() ;  
  
  constructor(public dialog: MatDialog,
    private firearmService: FirearmService) {} 

  displayedColumns: string[] = [
    'REF#',
    'NAME',
    'UNIT',
    'JOB',
    'ACCOUNT TYPE',
   
  ];

  ngOnInit(): void { 
   this.getAllUser();


    throw new Error('Method not implemented.');
  }

  openUserModal(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px', // Set the desired width of the modal
      // Add any additional configuration options here
    });
  } 

  getAllUser(): void {
    this.firearmService.getAllUser().subscribe(
      (response: User[]) => {
        if (response && response.length > 0 ) {
          this.dataSource.data = response; // Assign the data to the data source
          console.log("Connected Successfully", response);
      
        } else {
          console.error('API response is empty or undefined');
        } 
        
      },
      (error) => {
        console.error('Error fetching data from API:', error);
        this.errorMessage = 'An error occurred while fetching data from the API.';
      }
    );
  }  
   

}