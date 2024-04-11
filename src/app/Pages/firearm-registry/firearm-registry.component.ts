import { Component, OnInit, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Firearm } from '../../Core/models/Firearm.model';
import { FirearmService } from '../../Core/services/firearm.service';
// import { ReturnModalComponent } from '../return-modal/return-modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
// import { OfficerModuleComponent } from '../officer/officer-module/officer-module.component';
import { CivilComponent } from '../civillian/civil/civil.component';
import { RecoveryComponent } from '../recovery/recovery.component';
// import { PoagComponent } from '../poag/poag.component';
// import { IofcComponent } from '../../iofc/iofc.component';
import { HmtsModalComponent } from '../hmts/hmts-modal/hmts-modal.component';
import { IofcModalComponent } from '../iofc/iofc-modal/iofc-modal.component';
import { PoagModalComponent } from '../poag/poag-modal/poag-modal.component'; 

// ...

@Component({
  selector: 'app-firearm-registry',
  templateUrl: './firearm-registry.component.html',
  styleUrls: ['./firearm-registry.component.css'],
}) 

export class FirearmRegistryComponent implements OnInit {
    //to search the firearm 
  searchTerm: string = ''; 
  filterTerm: string = ''; 
  filterTerm2: string = '';
  filterTerm3: string = '';
  filterTerm4: string = '';
  filterTerm5: string = '';
  filterTerm6: string = ''; 
  filterTerm7: string = ''; 
  filterTerm8: string = '';
  filterTerm9: string = '';
  filterTerm10: string = '';
  filterTerm11: string = '';
  filterTerm12: string = '';


  //vairable to open the modals
  showOfficer = false;
  showCivill = false;
  showrecoverymodal = false;
  showPoagmodal = false;
  showIofcmodal = false;
  showhmtsmodal = false; 
  showReturn = false; 

  table!: MatTable<any>;
  showPopupFlag = 0;
  firearms: Firearm[] = [];
  errorMessage: string | undefined;
  formValue!: FormGroup;
  dataFromApi: any;
  dataSource: MatTableDataSource<Firearm> = new MatTableDataSource<Firearm>() ;  
  isTableEmpty = true; // Initially, set it to true
// After setting your data source, update isTableEmpty
  
civilData: any; // Initialize this with the data you want to pass
dataToSend: any = {}; //
poagData: any = {};   //
iofcData: any = {}; 
hmtsData: any = {};   //

    /* Send the data to the civil modal which means the firearm details*/
  @Output() sendDataToCivilEvent = new EventEmitter<any>();
  @Output() sendDataToChildEvent = new EventEmitter<any>(); 
  @Output() sendDataToPoagEvent = new EventEmitter<any>();
  @Output() sendDataToIofcEvent = new EventEmitter<any>(); 
  @Output() sendDataToHmtsEvent = new EventEmitter<any>(); 
  

  sendDataToCivil(data: any) {    //to send the data to the civil modal 
    this.sendDataToCivilEvent.emit(data);
    this.civilData = data;
  } 
  sendDataToChild(dataItem: any) { 
   //to send the data to the officer modal  
   this.sendDataToChildEvent.emit(dataItem);//to emit the event and pass the data to child component
    this.dataToSend = dataItem;
  } 

  sendDataToPoag(data: any) {
    this.sendDataToPoagEvent.emit(data);
    this.poagData = data;
  } 

  sendDataToIofc(data: any) {
    this.sendDataToIofcEvent.emit(data);
    this.iofcData = data;
   }
 
   sendDataToHmts(data: any) {
    this.sendDataToHmtsEvent.emit(data);
    this.hmtsData = data;
   }

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
    private firearmService: FirearmService,
  ) {}  

  ngOnInit(): void {
    this.getAllFirearm(); 
    // Initialize formValue here if needed
  }  
 
 search() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
    this.table.renderRows();
  }  

  filter() {
    this.dataSource.filter = this.filterTerm.trim().toLowerCase();
    this.table.renderRows();
  } 
  
  filter2() {
    this.dataSource.filter = this.filterTerm2.trim().toLowerCase();
    this.table.renderRows();
  }  

  filter3() {
    this.dataSource.filter = this.filterTerm3.trim().toLowerCase();
    this.table.renderRows();
  } 

  filter4() {
    this.dataSource.filter = this.filterTerm4.trim().toLowerCase();
    this.table.renderRows();
  } 

  filter5() {
    this.dataSource.filter = this.filterTerm5.trim().toLowerCase();
    this.table.renderRows();
  }  

  filter6() {
    this.dataSource.filter = this.filterTerm6.trim().toLowerCase();
    this.table.renderRows();
  }  

  filter7() {
    this.dataSource.filter = this.filterTerm7.trim().toLowerCase();
    this.table.renderRows();
  } 
  
  filter8() {
    this.dataSource.filter = this.filterTerm8.trim().toLowerCase();
    this.table.renderRows();
  } 
  filter9() {
    this.dataSource.filter = this.filterTerm9.trim().toLowerCase();
    this.table.renderRows();
  } 
  filter10() {
    this.dataSource.filter = this.filterTerm10.trim().toLowerCase();
    this.table.renderRows();
  } 
  filter11() {
    this.dataSource.filter = this.filterTerm11.trim().toLowerCase();
    this.table.renderRows();
  } 
  filter12() {
    this.dataSource.filter = this.filterTerm12.trim().toLowerCase();
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
  
   //method to open the modal 
   openOfficer() {
    this.showOfficer = true; 
    
  } 
  closeModal(event: boolean) {         //close button for the iofc modal 
    this.showIofcmodal = false;
  }

  //method to open civillian modal 
  openCivill(): void {
    this.showCivill= true;
    this.dialog.open(CivilComponent);
  }  

  OpenRecoveryModal(): void {
    this.showrecoverymodal = true; 
    this.dialog.open(RecoveryComponent)
  }
 
  OpenPoagModal(): void {
    this.showPoagmodal = true;
    this.dialog.open(PoagModalComponent)
  }
  
  OpeniofcModal(): void {
    this.showIofcmodal = true;
    this.dialog.open(IofcModalComponent)
  } 

  OpenHmtsModal(): void {
    this.showhmtsmodal = true; 
    this.dialog.open(HmtsModalComponent)
  } 
  
  //modal to add new firearm
  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}