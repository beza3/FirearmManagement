import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/Pages/login/login.component';
import { FirearmRegistryComponent } from './Pages/firearm-registry/firearm-registry.component';
import { LossTableComponent } from './Pages/loss-table/loss-table.component';
import { DestroyedTableComponent } from './Pages/destroyed-table/destroyed-table.component';
import { OfficerComponent } from './Pages/officer/officer.component';
import { CivillianComponent } from './Pages/civillian/civillian.component';
import { PoagComponent } from './Pages/poag/poag.component';
import { IofcComponent } from './Pages/iofc/iofc.component';
import { HmtsComponent } from './Pages/hmts/hmts.component';
import { SystemUserAccountsComponent } from './Pages/system-user-accounts/system-user-accounts.component';
import { AccessControlListComponent } from './Auth/Pages/access-control-list/access-control-list.component';
import { AutomatedTasksComponent } from './Pages/automated-tasks/automated-tasks.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FirearmWithdrawComponent } from './Pages/Pending-operations/firearm-withdraw/firearm-withdraw.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { LostDestroyedComponent } from './Pages/lost-destroyed/lost-destroyed.component';
import { FirearmHolderCatagoriesComponent } from './Pages/firearm-holder-catagories/firearm-holder-catagories.component';
import { AuthGuard } from './Core/Guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'FirearmRegistryManagement', component: FirearmRegistryComponent },
  { path: 'lossTable', component: LossTableComponent },
  { path: 'destroyedTable', component: DestroyedTableComponent },
  // { path: 'PendingOperation', component: PendingOperationComponent}
  { path: 'officer', component: OfficerComponent },
  { path: 'civillian', component: CivillianComponent },
  { path: 'poag', component: PoagComponent },
  { path: 'iofc', component: IofcComponent },
  { path: 'hmts', component: HmtsComponent },
  { path: 'SystemUserAccount', component: SystemUserAccountsComponent, canActivate: [AuthGuard] },
  { path: 'AccessControlList', component: AccessControlListComponent },
  { path: 'backup', component: AutomatedTasksComponent },
  { path: 'Pending', component: FirearmWithdrawComponent},
  { path: 'lostDestroyed', component: LostDestroyedComponent },
  {
    path: 'firearmHOlderCatagories',
    component: FirearmHolderCatagoriesComponent,
  },
  { path: 'settings', component: SettingsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}