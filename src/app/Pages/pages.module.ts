import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';  

//Components
import { FirearmRegistryComponent } from './firearm-registry/firearm-registry.component'; 
import { OfficerComponent } from './officer/officer.component'; 
import { PoagComponent } from './poag/poag.component';  
import { CivillianComponent } from './civillian/civillian.component'; 
import { IofcComponent } from './iofc/iofc.component';  
import { DestroyedTableComponent } from './destroyed-table/destroyed-table.component'; 
import { HmtsComponent } from './hmts/hmts.component';
import { SystemUserAccountsComponent } from './system-user-accounts/system-user-accounts.component';
import { LossTableComponent } from './loss-table/loss-table.component';

//Modal - Components 
import { DistructionComponent } from './destroyed-table/distruction/distruction.component';
import { OfficerModuleComponent  } from './officer/officer-module/officer-module.component'; 
import { PoagModalComponent } from './poag/poag-modal/poag-modal.component';  
import { ReturnModalComponent } from './return-modal/return-modal.component'; 
import { RecoveryComponent } from './recovery/recovery.component'; 
import { CivilComponent } from './civillian/civil/civil.component'; 
import { IofcModalComponent } from './iofc/iofc-modal/iofc-modal.component'; 
import { HmtsModalComponent } from './hmts/hmts-modal/hmts-modal.component';
import { UserModalComponent } from './system-user-accounts/user-modal/user-modal.component'; 
import { LossComponent } from './loss-table/loss/loss.component'; 

//Modules    
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table'; 
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core'; 
import { MatToolbarModule } from '@angular/material/toolbar';  
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { FirearmWithdrawComponent } from './Pending-operations/firearm-withdraw/firearm-withdraw.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatButtonModule } from '@angular/material/button'; 
import {MatTabsModule} from '@angular/material/tabs'; 

@NgModule({
  declarations: [
    FirearmRegistryComponent,
    OfficerComponent,
    PoagComponent,
    OfficerModuleComponent,
    PoagModalComponent,
    ReturnModalComponent,
    RecoveryComponent,
    CivilComponent,
    CivillianComponent,
    IofcComponent,
    IofcModalComponent,
    DestroyedTableComponent,
    DistructionComponent,
    HmtsComponent,
    HmtsModalComponent,
    SystemUserAccountsComponent,
    UserModalComponent ,
    LossComponent,
    LossTableComponent,
    FirearmWithdrawComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    SharedModule,
    FormsModule,
    MatOptionModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule, 
    MatTabsModule
  ], 

  exports: [
    OfficerModuleComponent,
    PoagModalComponent,
    ReturnModalComponent,
    RecoveryComponent
  ]
}) 

export class PagesModule { }