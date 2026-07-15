import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud implements OnInit {
  employee = new Employee();

  http = inject(HttpClient);


  //empList: Employee[] = [];
  empList = signal<Employee[]>([]);
  ngOnInit() {
    console.log('ngOnInit');
    this.getAllEmployees();
  }

  getAllEmployees() {
    console.log('Calling API');
    this.http.get('https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee').subscribe({
      next: (response) => {
        debugger;
        this.empList.set(response as Employee[]);
      }
    });
  }
  onSaveEmployee() {
    debugger;
    this.http
      .post('https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee', this.employee)
      .subscribe({
        next: (response) => {
          debugger;
          alert('Employee saved successfully');
        },
      });
  }
}

class Employee {
  id: number;
  name: string;
  department: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.department = '';
  }
}
