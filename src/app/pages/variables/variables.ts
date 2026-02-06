import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  employeeName: string = 'Ashik Mehedi';
  empolyeeId: number = 1234;
  isActive:boolean = true;
  date: Date = new Date();
  
  deptName= 'Development';

  // string | number | boolean | Date
  data: string | number | boolean | Date = '';

  deptList: string[] = ['Development','HR', 'Sales', 'Marketing'];

  employeeObj = {
    name: "ashik",
    email: "ashik@example.com"
  };

  employeeList = [
    { name: "test", email: "test@gmail.com" },
    { name: "ashik", email: "ashik@example.com" }
  ]

  constructor(){
    this.employeeName = 'Alice'
  }
}
