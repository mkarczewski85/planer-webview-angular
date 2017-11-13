import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee.model";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
      this.employeeService.getAll()
        .subscribe(value => {this.employees = value});
  }

  getOne(id: number) {
    console.log('Index: ' + id);
    this.employeeService.getOne(id)
      .subscribe(value => {this.selectedEmployee = value});
  }

}
