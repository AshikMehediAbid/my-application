import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './pages/employee-list/employee-list';
import { AddEmployee } from './pages/add-employee/add-employee';
import { Variables } from './pages/variables/variables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeList,AddEmployee, Variables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-application');
}
