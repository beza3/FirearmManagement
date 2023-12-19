import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { GeneralComponent } from './general/general.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { OfficerModuleComponent } from './officer-module/officer-module.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessLogComponent } from './access-log/access-log.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccessControlListComponent } from './access-control-list/access-control-list.component';
import { SystemUserAccountsComponent } from './system-user-accounts/system-user-accounts.component';
import { DialogComponent } from './dialog/dialog.component';
import { DistructionComponent } from './distruction/distruction.component';
import { LossComponent } from './loss/loss.component';
import { NavregisterComponent } from './navregister/navregister.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';
import { OfficerComponent } from './officer/officer.component';
import { FirearmRegistryComponent } from './firearm-registry/firearm-registry.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SettingComponent } from './setting/setting.component';
import { FirearmSettingComponent } from './firearm-setting/firearm-setting.component';
import { AutomatedTasksComponent } from './automated-tasks/automated-tasks.component';
import { BackupComponent } from './backup/backup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from './shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PoagComponent } from './poag/poag.component';
import { IofcComponent } from './iofc/iofc.component';
import { HmtsComponent } from './hmts/hmts.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';
import { CivillianComponent } from './civillian/civillian.component';
import { PoagModalComponent } from './poag-modal/poag-modal.component';
import { IofcModalComponent } from './iofc-modal/iofc-modal.component';
import { HmtsModalComponent } from './hmts-modal/hmts-modal.component';
import { CivilComponent } from './civil/civil.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import { FourthTabComponent } from './fourth-tab/fourth-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';
import { IdComponent } from './id/id.component';
import { ToastrService } from 'ngx-toastr';
import { CheckboxFormComponent } from './checkbox-form/checkbox-form.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataFilterPipe } from './data-filter.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { PopupComponent } from './popup/popup.component';
import { Popup1Component } from './popup1/popup1.component';
import { ParentComponent } from './parent/parent.component';
import { PopupChild1Component } from './popup-child1/popup-child1.component';
import { PopupChild2Component } from './popup-child2/popup-child2.component';
import { PopupChild3Component } from './popup-child3/popup-child3.component';
import { PopupChild4Component } from './popup-child4/popup-child4.component';
import { PopupChild5Component } from './popup-child5/popup-child5.component';
import { PopupChild6Component } from './popup-child6/popup-child6.component';
import { NgxPrintModule} from 'ngx-print';
import { FirstComponent } from './first/first.component';
import { ReturnModalComponent } from './return-modal/return-modal.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReportVisualizationComponent } from './report-visualization/report-visualization.component';
import { IdModalComponent } from './id-modal/id-modal.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LossTableComponent } from './loss-table/loss-table.component';
import { DestroyedTableComponent } from './destroyed-table/destroyed-table.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { ChatComponent } from './chat/chat.component';
import { IdCardComponent } from './id-card/id-card.component';

import { LicenseComponent } from './license/license.component';


const appRoutes: Routes = [ 
  {
    path: 'general', component: GeneralComponent
  },
  {
    path: 'change-password', component: ChangePasswordComponent
  },
  {
    path: 'account-info', component: AccountInfoComponent
  },
  {
    path: 'officer', component: OfficerComponent
  },
  {
    path: 'AccessLog', component: AccessLogComponent
  },
  {
    path: 'AccessControlList', component: AccessControlListComponent
  },
  {
    path: 'SystemUserAccount', component: SystemUserAccountsComponent
  },
  {
    path: 'PendingFirearmOperation', component: LossComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'loss', component:LossComponent
  },
  {
    path:'recovery', component:RecoveryComponent
  },
  {
    path:'distruction', component:DistructionComponent
  },
  {
    path:'MenuCards', component:MenuCardsComponent
  }, 
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'header', component:DashboardComponent
  } ,
  {
    path:'header', component:DashboardComponent
  } ,
  {
    path:'backup', component: AutomatedTasksComponent
  },
  {
    path:'firearmsetting', component: FirearmSettingComponent
  },
  {
    path: 'generalsetting', component: SettingComponent
  }, 
  {
    path: 'poag', component: PoagComponent
  },
  {
    path: 'iofc', component: IofcComponent
  },
  {
    path: 'hmts', component: HmtsComponent
  },
  {
    path:'FirearmRegistryManagement', component: FirearmRegistryComponent
  },
  {
    path:'civillian', component:CivillianComponent
  },
  { path: 'second', component: SecondTabComponent },
  {
    path: 'withdraw', component: WithdrawComponent
  },
  {
    path: 'officermodule', component: OfficerComponent
  },
  {
    path: 'ReportVisualization', component: ReportVisualizationComponent
  } ,
  {
    path: 'map', component: MapComponent
  } , 
  {
    path: 'lossTable', component: LossTableComponent
  } , 
  {
    path: 'destroyedTable', component: DestroyedTableComponent
  } ,
  {
    path: 'OfficerLicense', component: IdCardComponent
  } , 
  {
    path: 'id', component: IdComponent
  } ,
  {
    path: 'license', component: LicenseComponent
  } , {
    path: 'visualization', component: ReportVisualizationComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent, 
    FooterComponent, 
    GeneralComponent, 
    ChangePasswordComponent, 
    AccountInfoComponent, 
    OfficerModuleComponent,
    AccessLogComponent,
    AccessControlListComponent, 
    SystemUserAccountsComponent, 
    DialogComponent, 
    DistructionComponent, 
    LossComponent, 
    NavregisterComponent, 
    RecoveryComponent, 
    RegisterComponent,
    OfficerComponent,
    FirearmRegistryComponent,
    SettingComponent,
    FirearmSettingComponent,
    AutomatedTasksComponent,
    BackupComponent,
    LoginComponent ,
    DashboardComponent,
    SidebarComponent,
    PoagComponent,
    IofcComponent,
    HmtsComponent,
    MenuCardsComponent,
    CivillianComponent,
    PoagModalComponent,
    IofcModalComponent,
    HmtsModalComponent,
    CivilComponent,
    UserModalComponent,
    FirstTabComponent,
    SecondTabComponent,
    FourthTabComponent,
    ThirdTabComponent,
    IdComponent,
    CheckboxFormComponent,
    WithdrawComponent,
    DataTableComponent,
    DataFilterPipe,
    PopupComponent,
    Popup1Component,
    ParentComponent,
    PopupChild1Component,
    PopupChild2Component,
    PopupChild3Component,
    PopupChild4Component,
    PopupChild5Component,
    PopupChild6Component,
    FirstComponent,
    ReturnModalComponent,
    ConfirmationDialogComponent,
    ReportVisualizationComponent,
    IdModalComponent,
    MapComponent,
    LossTableComponent,
    DestroyedTableComponent,
    SuccessPopupComponent,
    ErrorPopupComponent,
    ChatComponent,
    IdCardComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    CommonModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    HighchartsChartModule,
    SharedModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatRadioModule,
    NgxPrintModule,
    LeafletModule,

  ],
  exports: [
    // ...
    FirearmRegistryComponent,
    DataTableComponent,
  
  ],
  providers: [ToastrService],

  bootstrap: [AppComponent]
})

export class AppModule {

} 