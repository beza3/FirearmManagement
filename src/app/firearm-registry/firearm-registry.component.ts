import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { Firearm } from '../models/Firearm.model';
import { FirearmService } from '../services/firearm.service';
import { ReturnModalComponent } from '../return-modal/return-modal.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

// ...



@Component({
  selector: 'app-firearm-registry',
  templateUrl: './firearm-registry.component.html',
  styleUrls: ['./firearm-registry.component.css'],
  animations: [
    // Your animation definitions here
  ]
})
export class FirearmRegistryComponent implements OnInit {
  
  searchTerm: string = '';
  
  @ViewChild('table')
  table!: MatTable<any>;


  showReturn = false;
  showPopupFlag = 0;
  firearms: Firearm[] = [];
  errorMessage: string | undefined;
  formValue!: FormGroup;
  dataFromApi: any;
  dataSource: MatTableDataSource<Firearm> = new MatTableDataSource<Firearm>() ;
  
  displayedColumns: string[] = [
    'REF#',
    'FIREARM',
    'SERIAL NO',
    'HOLDER',
    'STATUS',
    'ACTION',
    'MANAGE'
  ];
    constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private firearmService: FirearmService
  ) {}


  
  ngOnInit(): void {
    this.getAllFirearm();
    // Initialize formValue here if needed
  } 
 search() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
    this.table.renderRows();
  }
  

  getAllFirearm(): void {
    this.firearmService.getAllFirearms().subscribe(
      (response: Firearm[]) => {
        if (response && response.length > 0 ) {
          this.dataSource.data = response; // Assign the data to the data source
          console.log("Connected Successfully", response);
          this.cdr.detectChanges();
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
  

  openReturn(): void {
    this.showReturn = true;
    this.dialog.open(ReturnModalComponent);
  }

  closeModal(): void {
    this.showReturn = false;
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  showPopup(popupNumber: number): void {
    this.showPopupFlag = popupNumber;
  }

  hidePopup(): void {
    this.showPopupFlag = 1;
    this.showPopupFlag = 2;
    this.showPopupFlag = 3;
  }
}
