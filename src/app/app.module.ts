import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule, Http} from "@angular/http";
import {EmployeeService} from "./employee.service";
import {RouterModule, Routes} from "@angular/router";
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent, children: [
    {path: ':id', children: EmployeeComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
