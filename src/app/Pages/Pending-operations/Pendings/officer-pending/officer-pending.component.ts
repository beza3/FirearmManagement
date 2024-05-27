import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { OfficerPending } from 'src/app/Core/models/OfficerPending.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';


@Component({
  selector: 'app-officer-pending',
  templateUrl: './officer-pending.component.html',
  styleUrls: ['./officer-pending.component.css']
}) 

export class OfficerPendingComponent implements OnInit {
  panelOpenState = false;
  dataSource: MatTableDataSource<OfficerPending> = new MatTableDataSource<OfficerPending>();
  displayedColumns: string[] = [
    'REF#',
    'NAME',
    'FIREARM',
    'WHO REGISTERED THE FIREARM',
    'REGISTERED BODY',
    'ACTION'
  ];
  errorMessage: string | undefined;
  isModalVisible = false;
  dataToSend: any;
  officerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firearmService: FirearmService,
    private http: HttpClient ,

  ) 
  {
    this.officerForm = this.fb.group({
      fullName: [''],
      fpId: [''],
      title: [''],
      phoneNumber: [''],
      position: [''],
      firearmType: [''],
      firearmModel: [''],
      firearmCalibre: [''],
      firearmMechanism: [''],
      manufacturerSerial: [''],
      magazineCapacity: [''],
      yearManufacture: [''],
      registeredFullName: [''],
      registeredTitle: [''],
      registeredPosition: [''],
      registeredEmail: [''],
      registeredSignature: [''],
      registeredDate: [''],
      registeredBodyFullName: [''],
      registeredBodyResponsibility: [''],
      registeredBodySignature: [''],
      registeredBodyDate: ['']
    });
  }
  

  ngOnInit(): void {
    this.getOfficerPending();
  }

  getOfficerPending(): void {
    this.firearmService.getallOfficerPending().subscribe(
      (response: OfficerPending[]) => {
        if (response && response.length > 0) {
          this.dataSource.data = response;
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
   
   postOfficer(){

   } 


  //confirm modal 
  openModal(element: OfficerPending): void {
    this.isModalVisible = true;
    this.officerForm.patchValue(element);
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  onConfirm() {
    if (this.officerForm.valid) {
      this.http.post('http://localhost:5141/api/Officer', this.officerForm.value)
        .subscribe(
          (response: any) => {
            console.log('Successfully submitted:', response);
            alert('Successfully submitted');
            const createdFirearmId = response.id;
            console.log('Created Firearm ID:', createdFirearmId);
            this.deleteFirearmById(createdFirearmId); 
          window.location.reload();

          },
          error => {
            console.error('Error:', error);
            alert('Fail To Register');
          }
        );
    }
  } 

  deleteFirearmById(id: number) {
    this.firearmService.deleteOfficerPendingById(id).subscribe(
      () => {
        console.log('Officer deleted successfully.');
      },
      (error) => {
        console.error('Error deleting Officer:', error);
      }
    );
  }


} 