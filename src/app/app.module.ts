import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ChartsModule } from 'ng2-charts';
import { CharityTablesComponent } from './Tables/charity-tables/charity-tables.component';
import { UserTablesComponent } from './Tables/user-tables/user-tables.component';
import { UserChartsComponent } from './Charts/user-charts/user-charts.component';
import { CharityChartsComponent } from './Charts/charity-charts/charity-charts.component';
import { AddCharityComponent } from './add-charity/add-charity.component'
import { HomeComponent } from './home/home.component';
 import { FilterPipe } from './charity-search.pipe';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLoginComponent,
    CharityTablesComponent,
    UserTablesComponent,
    UserChartsComponent,
    CharityChartsComponent,
    HomeComponent,
    AddCharityComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( routes ),
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
