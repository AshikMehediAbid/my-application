import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  employeeName = 'John Doe';
  deptName = signal("IT");
  emp = signal({name: 'John Doe', department: 'IT'});
  deptList = signal(['IT', 'HR', 'Finance']);
  // Signals are a new reactivity model in Angular that allows you to create 
  // reactive state and automatically update the UI when the state changes. 
  // They are designed to be more efficient and easier to use than traditional change detection mechanisms in Angular.

  constructor(){
    console.log('Employee Name before: ', this.employeeName);
   // console.log('Department before: ', this.deptName());

    setTimeout(() =>{
      this.employeeName = 'Alice';
      this.deptName.set('HR');
      console.log('Employee Name after: ', this.employeeName);
     // console.log('Department after: ', this.deptName());
    },2000
    );

    
  }


}
