import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CharityTablesComponent } from './Tables/charity-tables/charity-tables.component';
import { UserTablesComponent } from './Tables/user-tables/user-tables.component';
import { UserChartsComponent } from './Charts/user-charts/user-charts.component';
import { CharityChartsComponent } from './Charts/charity-charts/charity-charts.component';
import { AddCharityComponent } from './add-charity/add-charity.component';
import { UpdateCharityComponent } from './add-charity/update-charity/update-charity.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const routes: Routes = [
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: '', component: AdminLoginComponent },
  { path:'dashboard', component: DashboardComponent},
  { path: 'usertables', component: UserTablesComponent },
  { path: 'usercharts', component: UserChartsComponent },
  { path: 'charitytable', component: CharityTablesComponent },
  { path: 'charitycharts', component: CharityChartsComponent },
  { path: 'add-charity', component: AddCharityComponent },
  { path: 'updateCharity/:id',component: UpdateCharityComponent},
  { path: '*', component: AdminLoginComponent }
];
