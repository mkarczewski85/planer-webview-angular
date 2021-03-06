import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll()
      .subscribe(value => {this.employees = value});
  }



}
